import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY ?? '';
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID ?? '';
const AIRTABLE_TABLE_NAME = 'Waitlist';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const { name, email, city, travelPeriod, adults, children, membershipTier } = body;

	if (!email) {
		return json({ error: 'Email is required' }, { status: 400 });
	}

	try {
		const response = await fetch(
			`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fields: {
						Name: name || '',
						Email: email,
						City: city || '',
						'Travel Period': travelPeriod || '',
						Adults: adults || '',
						Children: children || '',
						'Membership Interest': membershipTier || 'none',
						'Submitted At': new Date().toISOString()
					}
				})
			}
		);

		if (!response.ok) {
			const err = await response.json();
			console.error('Airtable error:', err);
			return json({ error: 'Airtable submission failed' }, { status: 500 });
		}

		return json({ success: true });
	} catch (err) {
		console.error('Waitlist submission error:', err);
		return json({ error: 'Server error' }, { status: 500 });
	}
};
