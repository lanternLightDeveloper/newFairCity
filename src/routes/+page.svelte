<script>
	import { fade } from 'svelte/transition';

	import img1 from '$lib/imgs/1.jpg';
	import img2 from '$lib/imgs/2.jpg';
	import img3 from '$lib/imgs/3.jpg';
	import img4 from '$lib/imgs/4.jpg';
	import img5 from '$lib/imgs/5.jpg';

	//  🦕  🦖🦖🦖 🦕 🦕 Image Slider 💀= 💣 🌠

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

	//  🦕  🦖🦖🦖 🦕 🦕  Extras/ Debug 💀= 💣 🌠
</script>

<div
	class="slider"
	tabindex="0"
	role="slider"
	aria-valuemin="0"
	aria-valuemax={total - 1}
	aria-valuenow={index}
	aria-label="Image slider"
	onkeydown={onKeydown}
	onmouseenter={() => (playing = false)}
	onmouseleave={() => (playing = true)}
>
	<button class="nav left" onclick={prev} aria-label="Previous slide">‹</button>
	<button class="nav right" onclick={next} aria-label="Next slide">›</button>

	{#key current}
		<img src={images[index]} alt="Slide" />
	{/key}

	<div class="slider-poa-container">
		<article class="slider-poa">
			<p>
				Hours:
				<br />
				Wednesday/Thursday 10am–9pm Friday/Saturday 10am–10pm Sunday 10am–6pm
			</p>

			<button class="pulse-button">Full event Button</button>
		</article>
		<article class="slider-poa">
			<p>
				Admission: General Admission: $12 Senior/kids: $5 Under 5: Free Parking $10 per day per
				vehicle
			</p>
		</article>
	</div>

	<div class="dots" role="tablist" aria-label="Slide selector">
		{#each images as _, i}
			<button
				class="dot"
				class:active={i === index}
				role="tab"
				aria-selected={i === index}
				aria-label="image order"
				onclick={() => (index = i)}
			>
			</button>
		{/each}
	</div>
</div>

<article class="warningBanner">
	<p>
		IMPORTANT MESSAGE: We are aware of fraudulent links to purchase tickets for the Kitsap Fair &
		Stampede. ALL tickets to the fair and rodeo should only be purchased on this site or at the
		venue during the fair.
	</p>
</article>

<button class="btn-Wave"> Credit union discount button</button>

<article class="warningBannerAlt">
	<p>
		NO PETS ALLOWED
		<br />
		No dogs or pets allowed
		<br />
		<br />
		Service Animals Welcome
		<br />
		Service animals are trained to work or perform a task for persons with disabilities.
		<br />
		<br />
		*Comfort and/or emotional support animals ARE NOT service animals.
	</p>
</article>

<div class="grid-5col">
	<div></div>

	<section class="grid-content-box">
		Main Entertainment
		<br />
		​ ​Rodeo: <br />
		Wed - Fri 6:30pm <br />
		Sat 11:00am <br />
		Xtreme Bulls: Sun 11:00am <br />
		Kitsap Jr. Livestock Auction: <br />
		Sat 2:00pm <br />
		Thompson Square Concert: <br />
		Sat 7:00pm <br />

		<button>Full event Button</button>
	</section>
	<section class="grid-content-box">Box B</section>
	<section class="grid-content-box">Box C</section>

	<div></div>
	<div></div>
	<section class="grid-content-box">
		<h3>Fair Day Sponsors</h3>
		<ul class="fair-day-sponsors">
			<li>
				<strong>Wednesday:</strong> Opening at the Fair — proudly sponsored by Joyce Construction
			</li>
			<li>
				<strong>Thursday:</strong> Military Recognition Day — proudly sponsored by Geico Local
				<em
					>(discount is given all week long on rodeo and Xtreme Bulls in appreciation of military
					service)</em
				>
			</li>
			<li><strong>Friday:</strong> Day at the Fair — proudly sponsored by Kitsap Credit Union</li>
			<li>
				<strong>Saturday:</strong> Kids Day at the Fair — Kids 12 and under come to the Fair free! Proudly
				sponsored by Haselwood Auto Group
			</li>
			<li>
				<strong>Sunday:</strong> Senior Day at the Fair — 62 and older come to the Fair free! Proudly
				sponsored by Kitsap Credit Union
			</li>
		</ul>
	</section>

	<section class="grid-content-box">
		<h3>Kitsap Stampede Sponsors</h3>
		<ul class="stampede-sponsors">
			<li><strong>Wednesday:</strong> Opening Night — proudly sponsored by Agate Asphalt</li>
			<li>
				<strong>Thursday:</strong> Patriot Night — proudly sponsored by Virginia Mason Franciscan Health
			</li>
			<li>
				<strong>Friday:</strong> Tough Enough to Wear Pink — proudly sponsored by Kitsap Credit Union
			</li>
			<li><strong>Saturday:</strong> Kids Day — proudly sponsored by Haselwood Auto Group</li>
		</ul>
	</section>
	<section class="grid-content-box">
		<h3>Xtreme Bulls Sponsor</h3>
		<ul class="xtreme-bulls-sponsor">
			<li><strong>Sunday:</strong> Xtreme Bulls — proudly sponsored by Hanley Construction</li>
			<li>
				<strong>Theme Contest:</strong> Have an idea for the 2026 fair? Submit your theme!
				<br />
				If your theme is chosen, you’ll win a family pass (two adults and two children) and a t-shirt
				featuring the 2026 Kitsap Fair logo.
			</li>
		</ul>
	</section>

	<div></div>
</div>

<p>
	Submit Ideas Button If your theme is chosen for the 2026 fair, you will win a family pass (two
	adults and two children) and a t-shirt with the logo for the 2026 Kitsap Fair!
</p>

<style>
	.slider {
		position: relative;
		width: 100vw;
		height: 60vh;
		aspect-ratio: 16 / 9;
		margin: 0 auto;
		overflow: hidden;
		outline: none;
		z-index: 950;

		@media (min-width: 768px) {
			height: 100vh;
		}
	}

	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		user-select: none;
		pointer-events: none;
	}
	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
		font-size: 1.5rem;
		line-height: 1;
		width: 40px;
		height: 40px;
		border-radius: 999px;
		border: none;
		color: white;
		background: color-mix(in srgb, black 55%, transparent);
		cursor: pointer;
	}
	.nav.left {
		left: 10px;
	}
	.nav.right {
		right: 10px;
	}
	.nav:hover {
		background: color-mix(in srgb, black 70%, transparent);
	}

	.dots {
		position: absolute;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 2;
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 999px;
		border: none;
		background: #ffffff66;
		cursor: pointer;
	}
	.dot.active {
		background: white;
	}

	.slider-poa-container {
		display: flex;
		justify-content: center;
		gap: 2rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 2rem;
	}

	.slider-poa {
		flex: 1;
		max-width: 400px;
		max-height: fit-content;
		background: var(--accent-1);
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		text-align: center;

		& p {
			margin: 0;
			padding: var(--size-4);
		}
	}

	.warningBanner {
		background-color: var(--accent-2);
		width: 100vw;
		color: var(--text-1);
		padding: var(--size-1);
		text-align: center;
		font-weight: bold;
		box-shadow: var(--box-shadow);
	}

	.warningBannerAlt {
		background-color: var(--accent-1);
		width: 100vw;
		color: var(--text-1);
		padding: var(--size-1);
		text-align: center;
		font-weight: bold;
		box-shadow: var(--box-shadow);
	}
</style>
