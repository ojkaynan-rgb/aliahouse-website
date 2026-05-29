<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';

	let { children } = $props();

	let modalOpen = $state(false);

	function openModal() { modalOpen = true; }
	function closeModal() { modalOpen = false; }
</script>

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
{#if modalOpen}
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
		<button class="btn-gold" style="width:100%" onclick={closeModal}>Join first-access list</button>
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
</style>
