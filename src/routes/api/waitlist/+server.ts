import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

// --- Rate limiting: max 5 submissions per IP per 10 minutes ---
const ipMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const entry = ipMap.get(ip);
	if (!entry || now > entry.resetAt) {
		ipMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
		return false;
	}
	if (entry.count >= RATE_LIMIT) return true;
	entry.count++;
	return false;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const body = await request.json();

	// --- 1. Honeypot: bots fill hidden fields, humans don't ---
	if (body.website || body.phone_number) {
		// Silently accept to not tip off bots
		return json({ success: true });
	}

	const { name, email, city, travelPeriod, adults, children, membershipTier, turnstileToken } = body;

	// --- 2. Rate limiting ---
	const ip = getClientAddress();
	if (isRateLimited(ip)) {
		return json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
	}

	if (!email) {
		return json({ error: 'Email is required' }, { status: 400 });
	}

	const SHEET_SCRIPT_URL = env.GOOGLE_SHEET_SCRIPT_URL ?? '';
	const TURNSTILE_SECRET = env.TURNSTILE_SECRET_KEY ?? '';

	if (!SHEET_SCRIPT_URL) {
		console.error('Missing GOOGLE_SHEET_SCRIPT_URL env var');
		return json({ error: 'Server misconfiguration: missing Google Sheet script URL' }, { status: 500 });
	}

	// --- 3. Turnstile verification (only if secret key is configured) ---
	if (TURNSTILE_SECRET) {
		if (!turnstileToken) {
			return json({ error: 'Security check required.' }, { status: 400 });
		}
		const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ secret: TURNSTILE_SECRET, response: turnstileToken })
		});
		const verifyData = await verifyRes.json() as { success: boolean };
		if (!verifyData.success) {
			return json({ error: 'Security check failed. Please try again.' }, { status: 400 });
		}
	}

	try {
		const response = await fetch(SHEET_SCRIPT_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, city, travelPeriod, adults, children, membershipTier })
		});

		const rawText = await response.text();

		if (!response.ok) {
			console.error('Google Sheet error:', response.status, rawText);
			return json({ error: 'Sheet submission failed' }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Waitlist fetch error:', err);
		return json({ error: 'Network error reaching Google Sheet', detail: String(err) }, { status: 500 });
	}
};
