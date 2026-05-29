<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		if (typeof gtag !== 'undefined') {
			gtag('event', 'generate_lead', {
				event_category: 'waitlist',
				event_label: 'first_access_form'
			});
		}
	});
</script>

<svelte:head>
	<title>You're on the list — Alia House</title>
	<meta name="description" content="Thank you for joining the Alia House first-access list. We'll be in touch with room previews, launch city updates and early booking opportunities." />
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="thankyou">
	<div class="icon">◇</div>
	<p class="eyebrow">Confirmed</p>
	<h1>You're on the list.</h1>
	<div class="rule"></div>
	<p class="body">We'll be in touch with room previews, launch city updates and early booking opportunities. Alia House opens soon.</p>
	<a href="/" class="btn-outline">Back to Alia House</a>
</section>

<style>
	.thankyou {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 80px 24px;
		background-color: var(--navy);
	}
	.icon {
		font-size: 32px;
		color: var(--gold);
		margin-bottom: 28px;
	}
	.eyebrow {
		font-size: 10px;
		letter-spacing: 0.5em;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 20px;
	}
	h1 {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(40px, 5vw, 68px);
		font-weight: 300;
		color: var(--white);
		line-height: 1.1;
		margin-bottom: 0;
	}
	.rule {
		width: 48px;
		height: 1px;
		background-color: var(--gold);
		margin: 32px auto;
	}
	.body {
		font-size: 15px;
		line-height: 1.85;
		color: var(--body);
		max-width: 440px;
		margin-bottom: 40px;
	}
</style>
