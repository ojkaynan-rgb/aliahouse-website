import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const AIRTABLE_TABLE_NAME = 'Waitlist';

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

	const AIRTABLE_API_KEY = env.AIRTABLE_API_KEY ?? '';
	const AIRTABLE_BASE_ID = env.AIRTABLE_BASE_ID ?? '';
	const TURNSTILE_SECRET = env.TURNSTILE_SECRET_KEY ?? '';

	if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
		console.error('Missing Airtable env vars');
		return json({ error: 'Server misconfiguration: missing Airtable credentials' }, { status: 500 });
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

	const fields: Record<string, string | number> = {
		Email: email,
		'Submitted At': new Date().toISOString()
	};

	if (name) fields['Name'] = name;
	if (city) fields['City'] = city;
	if (travelPeriod) fields['Travel Period'] = travelPeriod;
	if (membershipTier) fields['Membership Interest'] = membershipTier;
	if (adults) fields['Adults'] = String(adults);
	if (children) fields['Children'] = String(children);

	try {
		const response = await fetch(
			`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ fields })
			}
		);

		const rawText = await response.text();

		if (!response.ok) {
			let detail: unknown = rawText;
			try { detail = JSON.parse(rawText); } catch { /* keep raw text */ }
			console.error('Airtable error:', response.status, detail);
			return json({ error: 'Airtable submission failed', detail }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Waitlist fetch error:', err);
		return json({ error: 'Network error reaching Airtable', detail: String(err) }, { status: 500 });
	}
};
