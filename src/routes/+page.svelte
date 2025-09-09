<script>
	import { fade } from 'svelte/transition';
	import img0 from '$lib/imgs/fairPlay.jpg';
	import img1 from '$lib/imgs/1.JPG';
	import img2 from '$lib/imgs/2.JPG';
	import img3 from '$lib/imgs/3.JPG';
	import img4 from '$lib/imgs/4.JPG';
	import img5 from '$lib/imgs/5.JPG';

	const images = [img1, img2, img3, img4, img5];
	let index = $state(0);
	let playing = $state(true);
	const total = images.length;
	const current = $derived(() => images[index]);

	function next() {
		index = (index + 1) % total;
	}
	function prev() {
		index = (index - 1 + total) % total;
	}

	const intervalMs = 5000;
	$effect(() => {
		if (!playing) return;
		const id = setInterval(next, intervalMs);
		return () => clearInterval(id);
	});

	function onKeydown(e) {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}
</script>

<header class="header">
	<img src={img0} alt="kitsap fair and rodeo logo" class="logo" />
	<section class="header-info">
		<article>
			<p>
				<strong>Hours:</strong><br />
				Wed/Thu: 10am–9pm<br />
				Fri/Sat: 10am–10pm<br />
				Sun: 10am–6pm
			</p>
			<button class="btn-Shadow">Full Event</button>
		</article>
		<article>
			<p>
				<strong>Admission</strong><br />
				General Admission: $12<br />
				Seniors/Kids: $5<br />
				Under 5: Free<br />
				Parking: $10/day
			</p>
			<button class="btn-Shadow">Buy Tickets</button>
		</article>
	</section>
</header>

<aside class="alert">
	<p>
		⚠️ We are aware of fraudulent links. Tickets should only be purchased here or at the venue. ⚠️
	</p>
</aside>

<div
	tabindex="0"
	role="slider"
	aria-valuemin="0"
	aria-valuemax={total - 1}
	aria-valuenow={index}
	aria-label="Image slider"
	onkeydown={onKeydown}
	onmouseenter={() => (playing = false)}
	onmouseleave={() => (playing = true)}
	class="slider"
>
	<button class="nav prev" onclick={prev} aria-label="Previous slide">‹</button>
	<button class="nav next" onclick={next} aria-label="Next slide">›</button>
	{#key current}
		<img src={images[index]} alt="Slide" transition:fade class="slide" />
	{/key}
	<div class="dots" role="tablist" aria-label="Slide selector">
		{#each images as _, i}
			<button
				role="tab"
				aria-label="Slide {i + 1} of {total}"
				aria-selected={i === index}
				class:selected={i === index}
				onclick={() => (index = i)}
			></button>
		{/each}
	</div>
</div>

<section><p>Kitsap credit union members can recieve a discount on admission:</p></section>

<div class="center-wrapper">
	<button class="btn-Shadow">Click Me</button>
</div>

<aside class="notice">
	<p>
		🚫 No Pets Allowed<br />
		Service animals are welcome.<br />
		Comfort/emotional support animals are not service animals.
	</p>
</aside>

<main class="content">
	<section>
		<h2>Main Entertainment</h2>
		<p>
			Rodeo: Wed–Fri 6:30pm<br />
			Sat 11:00am<br />
			Xtreme Bulls: Sun 11:00am<br />
			Jr. Livestock Auction: Sat 2:00pm<br />
			Thompson Square Concert: Sat 7:00pm
		</p>
		<div class="center-wrapper">
			<button class="btn-Shadow">Full Event</button>
		</div>
	</section>

	<h2>Points of interest</h2>
	<section class="quick-links">
		<ul>
			<li><a href="/Rodeo">Rodeo & Bulls</a></li>
			<li><a href="/Entertainment">Entertainment</a></li>
			<li><a href="/Carnival">Carnival</a></li>
			<li><a href="/JrLivestockAuction">Jr Livestock Auction</a></li>
			<li><a href="/FairFood">Fair Food</a></li>
			<li><a href="/CommercialVendors">Commercial Vendors</a></li>
			<li><a href="/Vendors">Submit: Vendor, Exhibitor, Sponsor</a></li>
		</ul>
	</section>

	<h2>Fair Day Sponsors</h2>
	<section class="sponsors">
		<ul>
			<li><strong>Wed:</strong> Joyce Construction</li>
			<li>
				<strong>Thu:</strong> Military Recognition — Geico Local
				<em>(Discount all week long)</em>
			</li>
			<li><strong>Fri:</strong> Kitsap Credit Union</li>
			<li><strong>Sat:</strong> Haselwood Auto Group (Kids Free!)</li>
			<li><strong>Sun:</strong> Kitsap Credit Union (Seniors Free!)</li>
		</ul>
	</section>

	<h2>Kitsap Stampede Sponsors</h2>
	<section class="sponsors">
		<ul>
			<li><strong>Wed:</strong> Agate Asphalt</li>
			<li><strong>Thu:</strong> Virginia Mason Franciscan Health</li>
			<li><strong>Fri:</strong> Kitsap Credit Union (Pink Day)</li>
			<li><strong>Sat:</strong> Haselwood Auto Group</li>
		</ul>
	</section>

	<h2>Xtreme Bulls Sponsor</h2>
	<section class="sponsors">
		<ul>
			<li><strong>Sun:</strong> Hanley Construction</li>
		</ul>
	</section>
</main>

<footer class="footer">
	<p><strong>Theme Contest:</strong> Submit your 2026 theme idea & win a family pass + T-shirt!</p>
	<div class="center-wrapper">
		<button class="btn-Shadow">Submit Ideas</button>
	</div>
	<p>
		If your theme is chosen, you’ll win a family pass (2 adults + 2 kids) and a 2026 Kitsap Fair
		T-shirt.
	</p>
</footer>

<!--svelte-ignore css_unused_selector -->
<style>
	header {
		background-color: var(--bg-1);
		position: relative;
		padding: 1rem;
		text-align: center;
		border-bottom: 2px solid var(--bg-2);
		z-index: 975;
	}

	.logo {
		max-width: 220px;
		margin: auto;
	}
	.header-info {
		display: grid;
		gap: 1rem;
		margin-top: 1rem;
	}

	.center-wrapper {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center; /* horizontal center */
		align-items: center; /* vertical center */
	}

	.alert {
		background: var(--accent-2);

		padding: 1rem;
		font-weight: 600;
		text-align: center;
	}

	.slider {
		position: relative;
		overflow: hidden;
		text-align: center;
	}
	.slide {
		width: 100%;
		height: auto;
	}
	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: var(--txt-1);
		border: none;
		font-size: 2rem;
		cursor: pointer;
		padding: 0.1rem 0.75rem;
		border-radius: 50%;
	}
	.nav.prev {
		left: 0.5rem;
	}
	.nav.next {
		right: 0.5rem;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.5rem;
	}
	.dots button {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		background: var(--hover);
	}
	.dots button.selected {
		background: var(--accent-2);
	}

	.notice {
		margin-top: var(--size-3);
		background: var(--accent-1);
		padding: 1rem;
		text-align: center;
		font-size: 0.9rem;
		border-top: var(--bord);
		border-bottom: var(--bord);
	}

	.content {
		padding: 1rem;
	}

	.quick-links ul {
		margin-top: var(--size-3);
		list-style: none;
		padding: 0;
	}
	.quick-links li {
		margin: 0.5rem 0;
		padding-left: 1.25rem;
	}
	.quick-links a {
		text-decoration: none;
		color: #0077cc;
		font-weight: 600;
	}
	h2 {
		border-top: var(--bord);
	}

	.sponsors {
		padding-left: 1.25rem;
	}
	.sponsors li {
		margin: 0.5rem 0;
	}

	footer {
		text-align: center;
		padding: 1rem;
		background: #222;
		color: #fff;
		margin-top: 2rem;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.header-info {
			grid-template-columns: 1fr 1fr;
			max-width: 800px;
			margin: 1rem auto 0;
		}
		.content {
			max-width: 900px;
			margin: auto;
		}
	}
</style>
