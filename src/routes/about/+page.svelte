<svelte:head>
	<title>About Alia House — Family-Ready Hotel Concept | Why We Exist</title>
	<meta name="description" content="Alia House was built around the hardest version of a city stay: travelling with children. A boutique hotel with coworking, kids playroom and restaurant across Amsterdam, Paris, London, Barcelona and Berlin." />
	<link rel="canonical" href="https://aliahouse.com/about" />

	<!-- Open Graph -->
	<meta property="og:title" content="About Alia House — Family-Ready Hotel Concept" />
	<meta property="og:description" content="Built around the hardest version of a city stay: travelling with children. One room, five cities, a full day reimagined." />
	<meta property="og:url" content="https://aliahouse.com/about" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:title" content="About Alia House — Family-Ready Hotel Concept" />
	<meta name="twitter:description" content="Built around the hardest version of a city stay: travelling with children. One room, five cities, a full day reimagined." />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "AboutPage",
		"name": "About Alia House",
		"url": "https://aliahouse.com/about",
		"description": "Alia House is a family lifestyle hotel concept founded on the belief that families make communities. Boutique city hotels in Amsterdam, Paris, London, Barcelona and Berlin.",
		"publisher": {
			"@type": "Organization",
			"name": "Alia House",
			"url": "https://aliahouse.com"
		}
	})}</script>`}
</svelte:head>

<!-- HERO -->
<section class="hero">
	<div class="hero-img"></div>
	<div class="hero-gradient"></div>
	<div class="hero-content">
		<p class="eyebrow">Family-ready. Not family-only.</p>
		<h1>A city stay designed<br /><em>around real life.</em></h1>
		<div class="hero-rule"></div>
		<p class="hero-tagline">For couples, families and work trips — with family needs properly solved.</p>
	</div>
</section>

<!-- FOUNDING BELIEF -->
<section class="section belief">
	<div class="section-inner">
		<p class="section-eyebrow">Why we exist</p>
		<div class="belief-grid">
			<div>
				<div class="belief-statement">
					Family-ready,<br /><em>not family-only.</em>
				</div>
			</div>
			<div class="belief-body">
				<p>Some guests arrive as a couple. Some with children. Some with a laptop and one free evening. Alia House is designed around the hardest version of a city stay: travelling with children.</p>
				<p>Early nights, early mornings, snacks, forgotten essentials, strollers, space to move — and parents who still want to enjoy the city. Solve that well, and the hotel becomes better for everyone: calm rooms, useful shared spaces and small services that make the city easier to enjoy.</p>
			</div>
		</div>
	</div>
</section>

<!-- TENSION / QUOTE -->
<section class="section tension">
	<div class="tension-inner">
		<p class="section-eyebrow" style="text-align:center">Our philosophy</p>
		<div class="tension-quote">
			"A stay should do more than house you.<br />It should hold the rhythm of your day."
		</div>
		<p class="tension-body">Real travel does not follow one schedule. Children sleep early, business calls run late, couples want a drink, and someone always needs a snack, a quiet corner or an extra hand. We design for that rhythm.</p>
	</div>
</section>

<!-- PILLARS -->
<section class="section pillars">
	<div class="section-inner">
		<p class="section-eyebrow">What we stand for</p>
		<h2 class="section-h2">Three pillars.<br /><em>One standard.</em></h2>
		<div class="pillars-grid">
			<div class="pillar">
				<div class="pillar-num">01</div>
				<div class="pillar-name">Belonging</div>
				<div class="pillar-meaning">Expected. Not tolerated.</div>
				<div class="pillar-rule"></div>
				<div class="pillar-body">You feel accepted in the place. The hotel makes room for the way you actually travel.</div>
			</div>
			<div class="pillar">
				<div class="pillar-num">02</div>
				<div class="pillar-name">Legacy</div>
				<div class="pillar-meaning">Travel that passes something on.</div>
				<div class="pillar-rule"></div>
				<div class="pillar-body">You carry something forward together. A ritual, a memory, a story, a city moment that becomes part of your shared life.</div>
			</div>
			<div class="pillar">
				<div class="pillar-num">03</div>
				<div class="pillar-name">Becoming</div>
				<div class="pillar-meaning">The stay supports the family's growth.</div>
				<div class="pillar-rule"></div>
				<div class="pillar-body">You leave slightly changed. More curious, more connected, more at ease — because the stay gave you the space to experience the city and each other differently.</div>
			</div>
		</div>
	</div>
</section>

<!-- JOURNEY -->
<section class="section journey">
	<div class="section-inner">
		<p class="section-eyebrow">The internal journey</p>
		<h2 class="section-h2">Every stay follows<br /><em>the same arc.</em></h2>
		<div class="journey-steps">
			<div class="journey-step">
				<div class="journey-word"><em>Gather.</em></div>
				<div class="journey-def">Connect and orient. You arrive alone, as a couple, for work, or with family — with bags, a laptop, a stroller, or someone who needs a snack. We're ready for all of it. The lobby is designed for the arrival, not the departure.</div>
			</div>
			<div class="journey-step">
				<div class="journey-word"><em>Hold.</em></div>
				<div class="journey-def">Protect routines, memory and intimacy. The room keeps what matters close. The restaurant keeps a table. The playroom helps when children need space. You hold the things worth holding.</div>
			</div>
			<div class="journey-step">
				<div class="journey-word"><em>Become.</em></div>
				<div class="journey-def">Leave calmer, lighter, more connected. Not every stay changes you. But a good one should leave a trace — a ritual, a memory, a place worth returning to. We design for the return.</div>
			</div>
		</div>
	</div>
</section>

<!-- PHOTO SPLIT -->
<div class="split">
	<img src="/about-restaurant.png" alt="Restaurant — Alia House" style="filter:brightness(0.85)" />
	<img src="/about-hero.png" alt="Kids space — Alia House" style="filter:brightness(0.85)" />
</div>

<!-- PROMISE -->
<section class="promise">
	<div class="promise-inner">
		<p class="section-eyebrow">Our brand promise</p>
		<h2>Together,<br /><em>further.</em></h2>
		<p class="promise-body">Alia House exists for travellers who refuse to lower the bar when real life comes with them. We do not ask you to choose between a beautiful hotel and a room that actually works. We built the room that does both — and a building that holds everything else.</p>
		<a href="/" class="btn-gold">Back to home</a>
		<div class="service-principle">We support the real rhythm of the stay.</div>
	</div>
</section>

<style>
	/* HERO */
	.hero {
		position: relative; min-height: 92vh;
		display: flex; flex-direction: column;
		justify-content: flex-end; overflow: hidden;
	}
	.hero-img {
		position: absolute; inset: 0;
		background-image: url('/about-hero.png');
		background-size: cover; background-position: center;
		filter: brightness(0.45);
	}
	.hero-gradient {
		position: absolute; inset: 0;
		background: linear-gradient(to top, rgba(11,17,33,1) 0%, rgba(11,17,33,0.3) 60%, transparent 100%);
	}
	.hero-content {
		position: relative; z-index: 2;
		padding: 0 80px 80px; max-width: 900px;
	}
	.eyebrow { font-size: 10px; letter-spacing: 0.5em; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; }
	h1 {
		font-family: 'Cormorant Garamond', serif; font-weight: 300;
		font-size: clamp(48px, 6vw, 86px); line-height: 1.05; color: var(--white);
	}
	h1 em { font-style: italic; color: #E8E0D2; }
	.hero-rule { width: 48px; height: 1px; background-color: var(--gold); margin: 32px 0; }
	.hero-tagline {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(18px, 2vw, 24px); font-weight: 300; font-style: italic;
		color: var(--body); max-width: 480px; line-height: 1.6;
	}

	/* BELIEF */
	.belief { background-color: var(--navy2); border-top: 1px solid var(--border); }
	.belief-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 60px; }
	.belief-statement {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(28px, 3.5vw, 46px); font-weight: 300; line-height: 1.25; color: var(--white);
	}
	.belief-statement em { font-style: italic; color: var(--gold); }
	.belief-body { font-size: 15px; line-height: 1.9; color: var(--body); }
	.belief-body p + p { margin-top: 20px; }

	/* TENSION */
	.tension { background-color: var(--navy); border-top: 1px solid var(--border); }
	.tension-inner { max-width: 760px; margin: 0 auto; text-align: center; }
	.tension-quote {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(22px, 3vw, 36px); font-weight: 300; font-style: italic;
		color: var(--white); line-height: 1.5; margin: 32px 0;
	}
	.tension-body { font-size: 15px; line-height: 1.9; color: var(--body); }

	/* PILLARS */
	.pillars { background-color: var(--navy2); border-top: 1px solid var(--border); }
	.pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 60px; }
	.pillar { background-color: var(--navy3); padding: 52px 40px; border-top: 2px solid transparent; transition: border-color 0.3s, background-color 0.3s; }
	.pillar:hover { border-top-color: var(--gold); background-color: var(--navy4); }
	.pillar-num { font-family: 'Cormorant Garamond', serif; font-size: 12px; color: var(--gold); letter-spacing: 0.2em; margin-bottom: 20px; }
	.pillar-name { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 300; color: var(--white); margin-bottom: 16px; }
	.pillar-meaning { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
	.pillar-rule { width: 28px; height: 1px; background-color: rgba(201,169,110,0.4); margin-bottom: 20px; }
	.pillar-body { font-size: 14px; line-height: 1.8; color: var(--body); }

	/* JOURNEY */
	.journey { background-color: var(--navy); border-top: 1px solid var(--border); }
	.journey-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 60px; }
	.journey-step { padding: 52px 40px; position: relative; }
	.journey-step::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background-color: rgba(201,169,110,0.25); }
	.journey-word { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 300; color: var(--white); margin-bottom: 20px; line-height: 1; }
	.journey-word em { font-style: italic; color: var(--gold); }
	.journey-def { font-size: 14px; line-height: 1.8; color: var(--body); }

	/* SPLIT */
	.split { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
	.split img { height: 480px; }

	/* PROMISE */
	.promise { background-color: var(--navy2); border-top: 1px solid var(--border); text-align: center; padding: 120px 48px; }
	.promise-inner { max-width: 720px; margin: 0 auto; }
	.promise h2 {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(36px, 5vw, 66px); font-weight: 300;
		color: var(--white); line-height: 1.1; margin-bottom: 32px;
	}
	.promise h2 em { font-style: italic; color: #E8E0D2; }
	.promise-body { font-size: 16px; line-height: 1.9; color: var(--body); margin-bottom: 48px; }
	.service-principle {
		font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase;
		color: var(--gold); margin-top: 48px;
		padding-top: 36px; border-top: 1px solid rgba(201,169,110,0.25);
	}

	@media (max-width: 900px) {
		.belief-grid { grid-template-columns: 1fr; gap: 40px; }
		.pillars-grid { grid-template-columns: 1fr; }
		.journey-steps { grid-template-columns: 1fr; }
		.split { grid-template-columns: 1fr; }
		.split img { height: 300px; }
		.hero-content { padding: 0 32px 60px; }
	}
	@media (max-width: 640px) {
		.promise { padding: 80px 24px; }
	}
</style>
