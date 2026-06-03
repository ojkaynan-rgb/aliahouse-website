import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const AIRTABLE_TABLE_NAME = 'Waitlist';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const { name, email, city, travelPeriod, adults, children, membershipTier } = body;

	const AIRTABLE_API_KEY = env.AIRTABLE_API_KEY ?? '';
	const AIRTABLE_BASE_ID = env.AIRTABLE_BASE_ID ?? '';

	if (!email) {
		return json({ error: 'Email is required' }, { status: 400 });
	}

	if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
		console.error('Missing Airtable env vars');
		return json({ error: 'Server misconfiguration: missing Airtable credentials' }, { status: 500 });
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
			try {
				detail = JSON.parse(rawText);
			} catch {
				// keep raw text
			}
			console.error('Airtable error:', response.status, detail);
			return json({ error: 'Airtable submission failed', detail }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Waitlist fetch error:', err);
		return json({ error: 'Network error reaching Airtable', detail: String(err) }, { status: 500 });
	}
};
