<script>
	import { fade } from 'svelte/transition';
	import img1 from '$lib/imgs/1.jpg';
	import img2 from '$lib/imgs/2.jpg';
	import img3 from '$lib/imgs/3.jpg';
	import img4 from '$lib/imgs/4.jpg';
	import img5 from '$lib/imgs/5.jpg';

	import Multipass from '$lib/imgs/multipass.png';
	import Calendar from '$lib/Calendar.svelte';

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
		<article class="glass-Box double-Block">
			<p>Check out these upcoming events!</p>
			<a href="/Extra/Tickets"><img src={Multipass} alt="kitsap fair entry ticket" /></a>
		</article>
	</section>
</header>
<aside class="alert light-White">
	<p>THIS IS NOT A REAL WEBSITE AND YOU SHOULD ONLY PURCHASE FROM THE ACTUAL PAGE</p>
	<!-- <p>We are aware of fraudulent links. Tickets should only be purchased here or at the venue.</p> -->
</aside>

<main class="grid-Main">
	<section class="double-Block">
		<h1>Thank you,</h1>
		<p>
			Thank you, so much for making the 2025 Kitsap Fair & Rodeo a success! You all really showed us
			how amazing the Northwest is!
		</p>
	</section>
	<section>
		<p>
			If you would like to submit to be a sponsor, vendor or artist please visit the <a
				href="/Submissions">Submissions</a
			> page or select a direct link to the guide
		</p>
		<ul>
			<button class="btn-Ghost"><a href="/Extra/SponsorGuide">Sponsor</a></button>
			<button class="btn-Ghost"><a href="/Extra/Exhibitor">Exhibitor</a></button>
			<button class="btn-Ghost"><a href="/Extra/VendorGuide">Vendor</a></button>
			<button class="btn-Ghost"><a href="/Entertainment/Artist">Artist</a></button>
		</ul>
	</section>

	<section>
		<p>
			There are multiple facilities at the Fairgrounds that can be rented throughout the year, as
			long as it is not during the fair. You can find a map of them below!
		</p>
		<ul>
			<button class="btn-Ghost">
				<a href="/Facilities">Facilities</a>
			</button>
		</ul>
	</section>

	<section class="double-Block">
		<h2>Upcoming Events</h2>
		<p>Check out the calendar below for anything happening at the fairgrounds in the near future</p>

		<Calendar />
	</section>
</main>
<footer class="footer">
	<p>
		<strong>Theme Contest:</strong> Submit your 2026 theme idea & win a family pass + T-shirt!
	</p>
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
				width: 50%;
				height: fit-content;
			}
		}

		@media only screen and (min-width: 1440px) {
			.glass-Box {
				width: 100%;

				p {
					margin: 0;
					padding: 0;
				}
				& img {
					width: 30%;
				}
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
