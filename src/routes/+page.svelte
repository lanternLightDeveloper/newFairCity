<script>
	import { fade } from 'svelte/transition';
	import img0 from '$lib/imgs/fairPlay.jpg';
	import img1 from '$lib/imgs/1.jpg';
	import img2 from '$lib/imgs/2.jpg';
	import img3 from '$lib/imgs/3.jpg';
	import img4 from '$lib/imgs/4.jpg';
	import img5 from '$lib/imgs/5.jpg';

	import Multipass from '$lib/imgs/multipass.png';

	import Sheeep from '$lib/imgs/sheepSilhouette.png';
	import Horse from '$lib/imgs/horseSilhouette2.png';
	import BullRider from '$lib/imgs/bullRiderSilhouette2.png';

	import Day from '$lib/imgs/daySilhouette.png';
	import imgRodeo from '$lib/imgs/rodeo.jpg';
	import imgEntertainment from '$lib/imgs/entertainment.jpg';
	import imgCarnival from '$lib/imgs/carnival.jpg';
	import imgAuction from '$lib/imgs/auction.jpg';
	import imgFood from '$lib/imgs/food.jpg';
	import imgCommercial from '$lib/imgs/commercial.jpg';
	import imgSubmit from '$lib/imgs/submit.jpg';

	const images = [img1, img2, img3, img4, img5];
	let index = $state(0);
	let playing = $state(true);
	const total = images.length;
	const current = $derived(() => images[index]);

	function next() {
		index = (index + 1) % total;
	}

	const intervalMs = 5000;

	$effect(() => {
		if (!playing) return;
		const id = setInterval(next, intervalMs);
		return () => clearInterval(id);
	});

	let items = [
		{ label: 'Rodeo & Bulls', href: '/Rodeo', img: imgRodeo },
		{ label: 'Entertainment', href: '/Entertainment', img: imgEntertainment },
		{ label: 'Carnival', href: '/Carnival', img: imgCarnival },
		{ label: 'Jr Livestock Auction', href: '/Auction', img: imgAuction },
		{ label: 'Fair Food', href: '/Food', img: imgFood },
		{ label: 'Commercial Vendors', href: '/Vendors', img: imgCommercial },
		{ label: 'Submit: Vendor, Exhibitor, Sponsor', href: '/Submissions', img: imgSubmit }
	];

	let open = $state(1);

	let backgroundImage = $derived.by(() => {
		const selected = items[open];
		return selected?.img ?? null;
	});
</script>

<header>
	<!-- Background slider -->
	<div class="slider">
		{#key current}
			<div class="slide" style={`background-image: url(${images[index]});`} transition:fade></div>
		{/key}
	</div>

	<!-- Foreground content -->
	<section class="header-info light-White">
		<article class="glass-Box">
			<p>
				<strong>Admission</strong><br />
				General Admission: $12<br />
				Seniors/Kids: $5<br />
				Under 5: Free<br />
				Parking: $10/day
			</p>
			<a href="/Extra/Tickets"><img src={Multipass} alt="kitsap fair entry ticket" /></a>
		</article>

		<article class="glass-Box">
			<p>
				<strong>Hours:</strong><br />
				Wed/Thu: 10am–9pm<br />
				Fri/Sat: 10am–10pm<br />
				Sun: 10am–6pm
			</p>
			<a href="/Entertainment/FairSchedule"><img src={Day} style="width: 40%;" alt="day icon" /></a>
		</article>
	</section>
</header>

<aside class="alert light-White">
	<p>THIS IS NOT A REAL WEBSITE AND YOU SHOULD ONLY PURCHASE FROM THE ACTUAL PAGE</p>
	<!-- <p>We are aware of fraudulent links. Tickets should only be purchased here or at the venue.</p> -->
</aside>

<main class="grid-Main">
	<section class="kcu-banner">
		<p class=" light-White">Kitsap credit union members can recieve a discount on admission:</p>

		<div class="center-wrapper">
			<a href="/Extra/Tickets">
				<button class="btn-Ghost light-White">Save Money!</button>
			</a>
		</div>
	</section>
	<section
		class="right-Block light-Back"
		style={`background-image: url(${Sheeep}); background-size: cover; background-position: center;`}
	>
		<h2>Main Entertainment</h2>
		<p>Rodeo: Wed–Fri 6:30pm</p>
		<p>Sat 11:00am</p>
		<p>Xtreme Bulls: Sun 11:00am</p>
		<p>Jr. Livestock Auction: Sat 2:00pm</p>
		<p>Thompson Square Concert: Sat 7:00pm</p>
		<div class="center-wrapper">
			<a href="/Entertainment/FairSchedule">
				<button class="btn-Ghost">Full Event</button>
			</a>
		</div>
	</section>

	<h2>Points of interest</h2>
	<section class="glass-flip-grid" style={`background-image: url('${backgroundImage}');`}>
		{#each items as item, i}
			<div
				class="glass-flip-card"
				tabindex="0"
				role="button"
				aria-label={`Details for ${item.label}`}
				onmouseenter={() => (open = i)}
				onmouseleave={() => (open = 0)}
				onfocus={() => (open = i)}
				onblur={() => (open = 1)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						open = i;
						e.preventDefault();
					}
				}}
			>
				<div class="glass-flip-inner" aria-hidden={open !== i}>
					<div class="glass-front">
						<h3>{item.label}</h3>
					</div>
					<div class="glass-back">
						<a href={item.href}>Visit {item.label}</a>
					</div>
				</div>
			</div>
		{/each}
	</section>

	<section class="block-List">
		<h4>FAIR DAY SPONSORS</h4>
		<p>Wednesday: Opening at the Fair proudly sponsored by Joyce Construction</p>
		<p>Thursday: Military Day proudly sponsored by Geico</p>
		<p>Friday: Day at the Fair proudly sponsored by Kitsap Credit Union</p>
		<p>
			Saturday: Kids Day at the Fair – Kids 12 and under come to the Fair free! proudly sponsored by
			Haselwood Auto Group
		</p>
		<p>
			Sunday: Senior Day at the Fair – 62 and older come to the Fair free! proudly sponsored by
			Kitsap Credit Union
		</p>
	</section>

	<section
		class="block-List light-Back"
		style={`background-image: url(${Horse}); background-size: cover; background-position: center;`}
	>
		<h4>KITSAP STAMPEDE SPONSORS</h4>
		<p>Wednesday: Opening Night proudly sponsored by Agate Asphalt</p>
		<p>Thursday: Patriot Night proudly sponsored by Virginia Mason Franciscan Health</p>
		<p>Friday: Tough Enough to Wear Pink proudly sponsored Kitsap Credit Union</p>
		<p>Saturday: Kids Day proudly sponsored by Haselwood Auto Group</p>

		<h2>XTREME BULLS SPONSOR</h2>
		<p>Sunday: proudly sponsored by Hanley Construction</p>
	</section>
</main>

<footer class="footer">
	<p><strong>Theme Contest:</strong> Submit your 2026 theme idea & win a family pass + T-shirt!</p>
	<div class="center-wrapper">
		<button class="btn-Ghost">Submit Ideas</button>
	</div>
	<p>
		If your theme is chosen, you’ll win a family pass (2 adults + 2 kids) and a 2026 Kitsap Fair
		T-shirt.
	</p>
</footer>

<style>
	header {
		background-color: var(--bg-1);
		position: relative;
		padding: 1rem;
		text-align: center;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		border-bottom: 2px solid var(--bg-2);
		z-index: 975;
	}

	.header-info {
		display: grid;
		grid-template-columns: 1fr;
		position: absolute;
		left: 25%;
		top: 20%;
		bottom: 4rem;
		gap: 1rem;
		height: 45vh;
		width: 80vw;
		margin: 1rem auto;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

		& img {
			padding: 0;
			margin: 0;
			width: 60%;
		}

		.glass-Box {
			width: 50vw;
			height: 35vh;
		}

		@media only screen and (min-width: 768px) {
			left: 10%;

			.glass-Box {
				width: 40vw;
				height: 65vh;
			}
		}
	}

	.slider {
		position: relative;
		overflow: hidden;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100vh;
		inset: 0;
	}

	.slide {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: left center;
		animation: pan 25s linear forwards infinite;
	}

	@keyframes pan {
		from {
			background-position: left center;
		}
		to {
			background-position: right center;
		}
	}

	.kcu-banner {
		background-image: url($lib/imgs/kcuCard.png);
		background-size: cover;
		background-position: center;
		background-size: 90%;
		background-repeat: no-repeat;
		height: 300px;
		padding: 1rem;
		text-align: center;
		font-weight: 600;
		color: var(--txt-2);
		background-blend-mode: multiply;

		& p {
			margin-top: 100px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
		}

		@media only screen and (min-width: 768px) {
			height: 300px;
			background-size: 60%;

			& p {
				width: 60%;
				margin-left: 20%;
			}
		}

		@media only screen and (min-width: 1024px) {
			height: 400px;
			background-size: 50%;

			& p {
				width: 50%;
				margin-left: 25%;
			}
		}

		@media only screen and (min-width: 1440px) {
			height: 400px;
			background-size: 60%;
			font-size: var();
		}
	}

	footer {
		text-align: center;
		padding: 1rem;
		background: var(--bg-2);
		margin-top: 4vh;

		& p {
			margin: 0;
			padding: 0;
		}
	}

	/* Responsive */
	@media (min-width: 768px) {
		.header-info {
			grid-template-columns: 1fr 1fr;
			max-width: 800px;
			top: 20vh;

			& img {
				width: 60%;
			}
		}
	}
</style>
