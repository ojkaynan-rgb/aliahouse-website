<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { modalOpen, openModal, closeModal } from '$lib/modalStore';

	let { children } = $props();

	let selectedTier = $state('none');

	async function submitWaitlist() {
		const name = (document.getElementById('waitlistName') as HTMLInputElement)?.value ?? '';
		const email = (document.getElementById('waitlistEmail') as HTMLInputElement)?.value ?? '';
		const city = (document.getElementById('modalCity') as HTMLSelectElement)?.value ?? '';
		const travelPeriod = (document.getElementById('travelPeriod') as HTMLInputElement)?.value ?? '';
		const adults = (document.getElementById('modalAdults') as HTMLSelectElement)?.value ?? '';
		const children = (document.getElementById('modalChildren') as HTMLSelectElement)?.value ?? '';

		// Fire GA4 conversion event
		if (typeof gtag !== 'undefined') {
			gtag('event', 'waitlist_email_submitted', {
				event_category: 'waitlist',
				event_label: city || 'unknown_city'
			});
		}

		// Submit to Airtable via API route
		try {
			await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, city, travelPeriod, adults, children, membershipTier: selectedTier })
			});
		} catch (e) {
			console.error('Waitlist submission failed:', e);
		}

		closeModal();
		goto('/thank-you');
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-NG9LWTNK71"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-NG9LWTNK71');
	</script>
</svelte:head>

<nav>
	<a href="/" style="text-decoration:none">
		<div class="logo-name">Alia House</div>
		<div class="logo-sub">Family-ready hospitality</div>
	</a>
	<div class="nav-right">
		<a href="/#locations" class="nav-link">Our houses</a>
		<a href="/#rooms" class="nav-link">Rooms</a>
		<a href="/about" class="nav-link" class:active={$page.url.pathname === '/about'}>About</a>
		<a href="/#membership" class="nav-link">Membership</a>
		<button class="btn-gold" onclick={openModal}>First access</button>
	</div>
</nav>

{@render children()}

<footer>
	<div class="footer-inner">
		<div>
			<div class="logo-name" style="font-size:12px">Alia House</div>
			<div class="logo-sub">Family-ready hospitality</div>
		</div>
		<div class="footer-cities">
			<span class="footer-city">Amsterdam</span>
			<span class="footer-city">Paris</span>
			<span class="footer-city">London</span>
			<span class="footer-city">Barcelona</span>
			<span class="footer-city">Berlin</span>
		</div>
		<p>© 2026 Alia House</p>
	</div>
</footer>

<!-- MODAL -->
{#if $modalOpen}
<div class="overlay open" onclick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
	<div class="modal">
		<button class="modal-close" onclick={closeModal}>×</button>
		<div class="modal-icon">◇</div>
		<h2>Be first to know when Alia House opens.</h2>
		<p>Alia House is in development. Join the first-access list for room previews, launch-city updates and first booking opportunities.</p>
		<div class="modal-divider"></div>
		<div class="modal-sub">Join the first-access list</div>
		<div class="modal-form-grid">
			<div class="modal-field">
				<label for="waitlistName">Name</label>
				<input type="text" id="waitlistName" placeholder="Your name" />
			</div>
			<div class="modal-field">
				<label for="waitlistEmail">Email</label>
				<input type="email" id="waitlistEmail" placeholder="your@email.com" />
			</div>
			<div class="modal-field">
				<label for="modalCity">Preferred city</label>
				<select id="modalCity">
					<option>Amsterdam</option>
					<option>Paris</option>
					<option>London</option>
					<option>Barcelona</option>
					<option>Berlin</option>
				</select>
			</div>
			<div class="modal-field">
				<label for="travelPeriod">Travel period</label>
				<input type="text" id="travelPeriod" placeholder="e.g. July / school holiday" />
			</div>
			<div class="modal-field">
				<label for="modalAdults">Adults</label>
				<select id="modalAdults">
					<option>1</option>
					<option selected>2</option>
					<option>3</option>
					<option>4+</option>
				</select>
			</div>
			<div class="modal-field">
				<label for="modalChildren">Children</label>
				<select id="modalChildren">
					<option>0</option>
					<option>1</option>
					<option selected>2</option>
					<option>3</option>
					<option>4+</option>
				</select>
			</div>
		</div>

		<div class="modal-divider"></div>
		<div class="modal-sub">Membership interest</div>
		<p class="modal-membership-intro">Are you interested in a membership — access to coworking, the restaurant and playroom across all five cities, whether you're staying or not?</p>
		<div class="membership-tiers">
			<label class="tier-option" class:selected={selectedTier === 'none'}>
				<input type="radio" name="membership" value="none" bind:group={selectedTier} />
				<div class="tier-opt-label">Not interested</div>
				<div class="tier-opt-price">Stay only</div>
			</label>
			<label class="tier-option" class:selected={selectedTier === 'day'}>
				<input type="radio" name="membership" value="day" bind:group={selectedTier} />
				<div class="tier-opt-label">Day Pass</div>
				<div class="tier-opt-price">From €25 / day</div>
			</label>
			<label class="tier-option" class:selected={selectedTier === 'city'}>
				<input type="radio" name="membership" value="city" bind:group={selectedTier} />
				<div class="tier-opt-label">City Member</div>
				<div class="tier-opt-price">From €120 / mo</div>
			</label>
			<label class="tier-option" class:selected={selectedTier === 'network'}>
				<input type="radio" name="membership" value="network" bind:group={selectedTier} />
				<div class="tier-opt-label">Network</div>
				<div class="tier-opt-price">From €280 / mo</div>
			</label>
		</div>

		<button class="btn-gold" style="width:100%;margin-top:8px" onclick={submitWaitlist}>Join first-access list</button>
	</div>
</div>
{/if}

<style>
	.overlay {
		display: none; position: fixed; inset: 0; z-index: 200;
		background-color: rgba(11,17,33,0.93);
		align-items: center; justify-content: center; padding: 24px;
	}
	.overlay.open { display: flex; }
	.modal {
		background-color: var(--navy2); border: 1px solid rgba(201,169,110,0.35);
		padding: 48px; max-width: 520px; width: 100%; text-align: center; position: relative;
		max-height: 90vh; overflow-y: auto;
	}
	.modal-close {
		position: absolute; top: 16px; right: 20px; background: none;
		border: none; color: var(--muted); font-size: 22px; cursor: pointer;
	}
	.modal-close:hover { color: var(--white); }
	.modal-icon { font-size: 28px; margin-bottom: 20px; color: var(--gold); }
	.modal h2 {
		font-family: 'Cormorant Garamond', serif; font-size: 28px;
		font-weight: 300; color: var(--white); margin-bottom: 16px;
	}
	.modal p { font-size: 14px; line-height: 1.75; color: var(--body); margin-bottom: 28px; }
	.modal-divider { width: 40px; height: 1px; background-color: var(--gold); margin: 0 auto 28px; }
	.modal-sub { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
	.modal-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; text-align: left; }
	.modal-field { display: flex; flex-direction: column; gap: 6px; }
	.modal-field label { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); }
	.modal-field input, .modal-field select {
		width: 100%; background-color: var(--navy4); border: 1px solid rgba(255,255,255,0.12);
		color: var(--white); font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 300;
		padding: 10px 12px; outline: none;
	}
	.modal-field select option { background-color: var(--navy4); }
	.modal-field input:focus, .modal-field select:focus { border-color: var(--gold); }

	/* MEMBERSHIP TIERS IN MODAL */
	.modal-membership-intro {
		font-size: 13px; line-height: 1.7; color: var(--body);
		margin-bottom: 16px; text-align: left;
	}
	.membership-tiers {
		display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;
		margin-bottom: 24px; text-align: left;
	}
	.tier-option {
		display: flex; flex-direction: column; gap: 4px;
		padding: 14px 12px;
		background-color: var(--navy4);
		border: 1px solid rgba(255,255,255,0.1);
		cursor: pointer; transition: border-color 0.2s, background-color 0.2s;
		position: relative;
	}
	.tier-option input[type="radio"] {
		position: absolute; opacity: 0; width: 0; height: 0;
	}
	.tier-option:hover {
		border-color: rgba(201,169,110,0.4);
	}
	.tier-option.selected {
		border-color: var(--gold);
		background-color: rgba(201,169,110,0.08);
	}
	.tier-opt-label {
		font-family: 'Cormorant Garamond', serif;
		font-size: 15px; font-weight: 300; color: var(--white);
	}
	.tier-option.selected .tier-opt-label { color: var(--gold); }
	.tier-opt-price {
		font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
		color: var(--muted);
	}
	.tier-option.selected .tier-opt-price { color: rgba(201,169,110,0.7); }
</style>
