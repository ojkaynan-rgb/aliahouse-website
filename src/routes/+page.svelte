<script lang="ts">
	import { openModal } from '$lib/modalStore';
	function openBooking() {
		if (typeof gtag !== 'undefined') {
			gtag('event', 'check_availability_click', {
				event_category: 'booking_intent',
				event_label: 'hero_widget'
			});
		}
		openModal();
	}

	let galleryIndex = $state(0);

	const slides = [
		{ img: '/room-1.png', alt: 'Room concept', title: 'The Room — Under Development', desc: 'Room concept currently in development. Warm oak, integrated storage, a view over the city.' },
		{ img: '/room-2.png', alt: 'Kids area', title: 'Playroom', desc: 'A calm space when children need to move and adults need a proper moment nearby.' },
		{ img: '/room-3.png', alt: 'Coworking', title: 'Coworking', desc: 'Work properly when you need to. Close the laptop and return to the city.' },
		{ img: '/playroom.jpg', alt: 'Lobby', title: 'The Lobby', desc: 'Arrive with luggage, a laptop, a stroller, or all three. The lobby is made to be used, not crossed.' },
		{ img: '/coworking.png', alt: 'Restaurant', title: 'The Restaurant', desc: 'Seasonal, local, genuinely good. The bar stays open after bedtime.' },
	];


	const experience = [
		{ img: '/lobby.png', num: '01', title: 'A table worth booking.', desc: 'All-day dining. Seasonal menus, local sourcing. Kids eat properly. Adults eat well.' },
		{ img: '/restaurant.png', num: '02', title: 'Work while they play.', desc: 'Coworking downstairs. Playroom next door. Close the laptop and walk out together.' },
		{ img: '/exp-restaurant.jpg', num: '03', title: 'The lobby as living room.', desc: 'A bar that opens at coffee and stays open late. A place that belongs to guests and members equally.' },
		{ img: '/exp-coworking.png', num: '04', title: 'Programming for the kids.', desc: 'Workshops, movie nights, activity kits. Children are guests here, not an afterthought.' },
	];

	const locations = [
		{ num: '01', city: 'Amsterdam', neighbourhood: 'Jordaan' },
		{ num: '02', city: 'Paris', neighbourhood: 'Le Marais' },
		{ num: '03', city: 'London', neighbourhood: 'Shoreditch' },
		{ num: '04', city: 'Barcelona', neighbourhood: 'Eixample' },
		{ num: '05', city: 'Berlin', neighbourhood: 'Mitte' },
	];

	function galleryPrev() { galleryIndex = (galleryIndex - 1 + slides.length) % slides.length; }
	function galleryNext() { galleryIndex = (galleryIndex + 1) % slides.length; }
</script>

<svelte:head>
	<title>Alia House — Family-Ready City Hotel | Amsterdam, Paris, London, Barcelona, Berlin</title>
	<meta name="description" content="Alia House is a boutique family hotel in Amsterdam, Paris, London, Barcelona and Berlin. One room for up to 4 guests, with coworking, kids playroom, restaurant and membership — from €380/night." />
	<link rel="canonical" href="https://aliahouse.com/" />

	<!-- Open Graph -->
	<meta property="og:title" content="Alia House — Family-Ready City Hotel" />
	<meta property="og:description" content="A boutique city hotel designed for families and couples. Coworking, kids playroom, restaurant and membership across Amsterdam, Paris, London, Barcelona and Berlin." />
	<meta property="og:url" content="https://aliahouse.com/" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:title" content="Alia House — Family-Ready City Hotel" />
	<meta name="twitter:description" content="A boutique city hotel designed for families and couples. Coworking, kids playroom, restaurant and membership across five European cities." />

	<!-- JSON-LD structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LodgingBusiness",
		"name": "Alia House",
		"description": "Alia House is a family lifestyle hotel concept across Amsterdam, Paris, London, Barcelona and Berlin. Rooms for up to 4 guests, coworking, kids playroom, restaurant and membership.",
		"url": "https://aliahouse.com",
		"logo": "https://aliahouse.com/favicon.png",
		"image": "https://aliahouse.com/og-image.jpg",
		"priceRange": "€€€",
		"amenityFeature": [
			{ "@type": "LocationFeatureSpecification", "name": "Coworking space", "value": true },
			{ "@type": "LocationFeatureSpecification", "name": "Kids playroom", "value": true },
			{ "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
			{ "@type": "LocationFeatureSpecification", "name": "Family rooms", "value": true },
			{ "@type": "LocationFeatureSpecification", "name": "High-speed WiFi", "value": true }
		],
		"location": [
			{ "@type": "Place", "name": "Alia House Amsterdam", "address": { "@type": "PostalAddress", "addressLocality": "Amsterdam", "addressRegion": "Jordaan", "addressCountry": "NL" } },
			{ "@type": "Place", "name": "Alia House Paris", "address": { "@type": "PostalAddress", "addressLocality": "Paris", "addressRegion": "Le Marais", "addressCountry": "FR" } },
			{ "@type": "Place", "name": "Alia House London", "address": { "@type": "PostalAddress", "addressLocality": "London", "addressRegion": "Shoreditch", "addressCountry": "GB" } },
			{ "@type": "Place", "name": "Alia House Barcelona", "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressRegion": "Eixample", "addressCountry": "ES" } },
			{ "@type": "Place", "name": "Alia House Berlin", "address": { "@type": "PostalAddress", "addressLocality": "Berlin", "addressRegion": "Mitte", "addressCountry": "DE" } }
		],
		"sameAs": [
			"https://www.instagram.com/aliahouse"
		]
	})}</script>`}
</svelte:head>

<!-- HERO -->
<section class="hero">
	<video autoplay muted loop playsinline>
		<source src="/hero-video.mp4" type="video/mp4" />
	</video>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<p class="eyebrow">Family-ready. Not family-only.</p>
		<h1>One room.<br /><em>More ways to stay.</em></h1>
		<div class="rule"></div>
		<p class="hero-body">For two, it is a generous city room. For four, a smarter family stay. Add coworking, play space and useful services — and the room works across couples, families and work trips.</p>
		<div class="city-dots">
			{#each ['Amsterdam', 'Paris', 'London', 'Barcelona', 'Berlin'] as city}
				<div class="city-dot"><span></span>{city}</div>
			{/each}
		</div>

	</div>
</section>

<!-- PRE-OPENING WIDGET -->
<section class="widget-section" id="first-access">
	<div class="booking-widget">
		<div class="widget-title">Pre-opening access</div>
		<p class="widget-intro">Alia House is not taking bookings yet. Tell us where and when you would stay and join the first-access list for room previews, launch cities and early booking windows.</p>
		<div class="widget-fields">
			<div class="field-group">
				<label>City</label>
				<select>
					<option>Amsterdam</option>
					<option>Paris</option>
					<option>London</option>
					<option>Barcelona</option>
					<option>Berlin</option>
				</select>
			</div>
			<div class="field-group">
				<label>Check-in</label>
				<input type="date" />
			</div>
			<div class="field-group">
				<label>Check-out</label>
				<input type="date" />
			</div>
			<div class="field-group">
				<label>Adults</label>
				<select>
					<option>1</option>
					<option selected>2</option>
				</select>
			</div>
			<div class="field-group">
				<label>Children</label>
				<select>
					<option>0</option>
					<option>1</option>
					<option selected>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
		<button class="btn-check" onclick={openBooking}>Join first-access list</button>
	</div>
</section>

<!-- LOCATIONS -->
<section class="section locations" id="locations">
	<div class="section-inner">
		<p class="section-eyebrow">Our houses</p>
		<h2 class="section-h2">Five cities.<br /><em>The same standard.</em></h2>
	</div>
	<div class="locations-grid">
		{#each locations as loc}
			<div class="loc-card">
				<div class="loc-number">{loc.num}</div>
				<div class="loc-city-name">{loc.city}</div>
				<div class="loc-neighbourhood">{loc.neighbourhood}</div>
				<div class="loc-open">Open</div>
			</div>
		{/each}
	</div>
</section>

<!-- ROOMS -->
<section class="section rooms" id="rooms">
	<div class="section-inner">
		<p class="section-eyebrow">The room</p>
		<h2 class="section-h2" style="margin-bottom:20px">From €380/night<br /><em>for up to 4 guests.</em></h2>
		<p class="rooms-intro">Equally comfortable for two. Designed to flex for four. Indicative launch pricing; final rates may vary by city, season and availability.</p>
		<div class="gallery-wrap">
			<div class="gallery-track" style="transform: translateX(-{galleryIndex * 100}%)">
				{#each slides as slide}
					<div class="gallery-slide">
						<img src={slide.img} alt={slide.alt} />
						<div class="gallery-caption">
							<h3>{slide.title}</h3>
							<p>{slide.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="gallery-nav">
			<div class="gallery-dots">
				{#each slides as _, i}
					<button class="gallery-dot" class:active={i === galleryIndex} onclick={() => galleryIndex = i} aria-label="Slide {i+1}"></button>
				{/each}
			</div>
			<div class="gallery-arrows">
				<button class="gallery-arrow" onclick={galleryPrev}>←</button>
				<button class="gallery-arrow" onclick={galleryNext}>→</button>
			</div>
		</div>
	</div>
</section>

<!-- EXPERIENCE -->
<section class="section experience" id="experience">
	<div class="section-inner">
		<p class="section-eyebrow">The experience</p>
		<h2 class="section-h2">More than a room.<br /><em>A full day, reimagined.</em></h2>
	</div>
	<div class="exp-grid">
		{#each experience as item}
			<div class="exp-item">
				<img src={item.img} alt={item.title} />
				<div class="exp-overlay">
					<div class="exp-num">{item.num}</div>
					<div class="exp-title">{item.title}</div>
					<div class="exp-desc">{item.desc}</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- MEMBERSHIP -->
<section class="section membership" id="membership">
	<div class="section-inner">
		<p class="section-eyebrow">Membership</p>
		<h2 class="section-h2">The building works<br /><em>for you every day.</em></h2>
		<div class="membership-intro">
			<p>Membership gives you access to the coworking, restaurant, playroom, and priority booking — whether you're staying or not. One membership, five cities.</p>
		</div>
		<div class="tiers">
			<div class="tier">
				<div class="tier-badge">Day access</div>
				<div class="tier-name">Day Pass</div>
				<div class="tier-price">From €25 / day</div>
				<div class="tier-rule"></div>
				<ul class="tier-perks">
					<li>Coworking access (full day)</li>
					<li>Playroom access for children</li>
					<li>Restaurant & lobby bar</li>
					<li>High-speed wifi</li>
					<li>Planned across five cities</li>
				</ul>
				<a href="/about" class="btn-outline" style="width:100%;text-align:center;display:block">Learn more</a>
			</div>
			<div class="tier featured">
				<div class="tier-badge">Most popular</div>
				<div class="tier-name">City Member</div>
				<div class="tier-price">From €120 / month</div>
				<div class="tier-rule"></div>
				<ul class="tier-perks">
					<li>Unlimited coworking, one city</li>
					<li>Playroom & kids programming</li>
					<li>Priority room booking</li>
					<li>10% discount on all stays</li>
					<li>Guest passes (2 / month)</li>
					<li>Monthly events & workshops</li>
				</ul>
				<button class="btn-gold" style="width:100%" onclick={openBooking}>Join preview list</button>
			</div>
			<div class="tier">
				<div class="tier-badge">Cross-city access</div>
				<div class="tier-name">Network</div>
				<div class="tier-price">From €280 / month</div>
				<div class="tier-rule"></div>
				<ul class="tier-perks">
					<li>Unlimited coworking, all cities</li>
					<li>Priority booking across all houses</li>
					<li>15% discount on all stays</li>
					<li>Dedicated concierge</li>
					<li>Guest passes for family or friends</li>
					<li>Early access to new locations</li>
				</ul>
				<a href="/about" class="btn-outline" style="width:100%;text-align:center;display:block">Learn more</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* HERO */
	.hero {
		min-height: 100vh; position: relative; overflow: hidden;
		display: flex; flex-direction: column;
		align-items: center; justify-content: center;
		text-align: center; padding: 140px 24px 80px;
		background-color: var(--navy);
	}
	.hero video {
		position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;
	}
	.hero-overlay {
		position: absolute; inset: 0; z-index: 1;
		background: linear-gradient(to top, rgba(11,17,33,0.9) 0%, rgba(11,17,33,0.3) 55%, rgba(11,17,33,0.1) 100%);
	}
	.hero-content { position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; align-items: center; }
	.eyebrow { font-size: 10px; letter-spacing: 0.5em; text-transform: uppercase; color: var(--gold); margin-bottom: 28px; }
	h1 { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: clamp(44px, 6.5vw, 82px); line-height: 1.06; color: var(--white); max-width: 760px; }
	h1 em { font-style: italic; color: #E8E0D2; }
	.rule { width: 48px; height: 1px; background-color: var(--gold); margin: 36px auto; }
	.hero-body { font-size: 16px; line-height: 1.85; color: var(--body); max-width: 500px; letter-spacing: 0.02em; }
	.city-dots { display: flex; gap: 28px; justify-content: center; margin-top: 32px; flex-wrap: wrap; }
	.city-dot { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); }
	.city-dot span { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background-color: var(--gold); margin-right: 8px; vertical-align: middle; }

	/* BOOKING WIDGET */
	.widget-section {
		background-color: var(--navy); display: flex; justify-content: center; padding: 0 24px 80px;
	}
	.booking-widget {
		width: 100%; max-width: 700px;
		background-color: var(--navy3); border: 1px solid rgba(201,169,110,0.35); padding: 32px;
	}
	.widget-title { font-size: 11px; letter-spacing: 0.4em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
	.widget-intro { font-size: 14px; line-height: 1.65; color: var(--body); max-width: 560px; margin-bottom: 22px; }
	.widget-fields { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 16px; }
	.field-group { display: flex; flex-direction: column; gap: 6px; }
	.field-group label { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); }
	.field-group select, .field-group input[type="date"] {
		background-color: var(--navy4); border: 1px solid rgba(255,255,255,0.12);
		color: var(--white); font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 300;
		padding: 12px; outline: none; appearance: none; -webkit-appearance: none;
	}
	.field-group select:focus, .field-group input:focus { border-color: var(--gold); }
	.btn-check {
		width: 100%; background-color: var(--gold); border: none; padding: 15px;
		font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 500;
		letter-spacing: 0.4em; text-transform: uppercase; color: var(--navy); cursor: pointer;
	}
	.btn-check:hover { background-color: var(--gold2); }

	/* LOCATIONS */
	.locations { background-color: var(--navy2); }
	.locations-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; max-width: 1080px; margin: 0 auto; }
	.loc-card { background-color: var(--navy3); padding: 48px 32px 40px; border-top: 1px solid rgba(201,169,110,0.2); transition: background-color 0.25s, border-color 0.25s; }
	.loc-card:hover { background-color: var(--navy4); border-top-color: var(--gold); }
	.loc-number { font-family: 'Cormorant Garamond', serif; font-size: 12px; color: var(--gold); letter-spacing: 0.2em; margin-bottom: 20px; }
	.loc-city-name { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 300; color: var(--white); line-height: 1.1; margin-bottom: 10px; }
	.loc-neighbourhood { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--body); margin-bottom: 28px; }
	.loc-open { display: inline-block; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); border: 1px solid rgba(201,169,110,0.4); padding: 5px 14px; }

	/* ROOMS GALLERY */
	.rooms { background-color: var(--navy); }
	.rooms-intro { font-size: 15px; line-height: 1.85; color: var(--body); max-width: 620px; margin-bottom: 60px; }
	.gallery-wrap { position: relative; overflow: hidden; }
	.gallery-track { display: flex; transition: transform 0.5s ease; }
	.gallery-slide { min-width: 100%; position: relative; }
	.gallery-slide img { height: 580px; width: 100%; }
	.gallery-caption {
		position: absolute; bottom: 0; left: 0; right: 0;
		background: linear-gradient(transparent, rgba(11,17,33,0.85));
		padding: 48px 48px 36px;
	}
	.gallery-caption h3 { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--white); margin-bottom: 6px; }
	.gallery-caption p { font-size: 13px; color: var(--body); max-width: 420px; line-height: 1.6; }
	.gallery-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
	.gallery-arrows { display: flex; gap: 10px; }
	.gallery-arrow {
		background-color: transparent; border: 1px solid rgba(201,169,110,0.4); color: var(--gold);
		width: 44px; height: 44px; font-size: 18px; cursor: pointer; transition: all 0.2s;
		display: flex; align-items: center; justify-content: center;
	}
	.gallery-arrow:hover { background-color: var(--gold); color: var(--navy); border-color: var(--gold); }
	.gallery-dots { display: flex; gap: 8px; align-items: center; }
	.gallery-dot {
		width: 24px; height: 1px; background-color: rgba(255,255,255,0.25);
		cursor: pointer; border: none; padding: 0; transition: background-color 0.2s;
	}
	.gallery-dot.active { background-color: var(--gold); }

	/* EXPERIENCE */
	.experience { background-color: var(--navy2); }
	.exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
	.exp-item { position: relative; overflow: hidden; }
	.exp-item img { height: 360px; transition: transform 0.4s; filter: brightness(0.65); }
	.exp-item:hover img { transform: scale(1.03); }
	.exp-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 32px; }
	.exp-num { font-family: 'Cormorant Garamond', serif; font-size: 11px; color: var(--gold); letter-spacing: 0.2em; margin-bottom: 8px; }
	.exp-title { font-size: 14px; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase; color: var(--white); margin-bottom: 8px; }
	.exp-desc { font-size: 13px; line-height: 1.7; color: var(--body); max-width: 340px; }

	/* MEMBERSHIP */
	.membership { background-color: var(--navy); }
	.membership-intro { max-width: 580px; margin-bottom: 64px; }
	.membership-intro p { font-size: 15px; line-height: 1.85; color: var(--body); margin-top: 20px; }
	.tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
	.tier { background-color: var(--navy3); padding: 44px 36px; transition: background-color 0.2s; }
	.tier:hover { background-color: var(--navy4); }
	.tier.featured { background-color: var(--navy4); border-top: 2px solid var(--gold); }
	.tier-badge { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
	.tier-name { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; color: var(--white); margin-bottom: 8px; }
	.tier-price { font-size: 13px; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 28px; }
	.tier-rule { width: 32px; height: 1px; background-color: rgba(201,169,110,0.4); margin-bottom: 28px; }
	.tier-perks { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
	.tier-perks li { font-size: 13px; color: var(--body); line-height: 1.5; padding-left: 16px; position: relative; }
	.tier-perks li::before { content: '—'; position: absolute; left: 0; color: var(--gold); font-size: 11px; }

	@media (max-width: 900px) {
		.locations-grid { grid-template-columns: repeat(2, 1fr); }
		.exp-grid { grid-template-columns: 1fr; }
		.tiers { grid-template-columns: 1fr; }
		.widget-fields { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 640px) {
		.locations-grid { grid-template-columns: 1fr; }
		.modal-form-grid { grid-template-columns: 1fr; }
	}
</style>
