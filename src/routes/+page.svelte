<script>
	import { fade } from 'svelte/transition';
	import img0 from '$lib/imgs/fairPlay.jpg';
	import img1 from '$lib/imgs/1.jpg';
	import img2 from '$lib/imgs/2.jpg';
	import img3 from '$lib/imgs/3.jpg';
	import img4 from '$lib/imgs/4.jpg';
	import img5 from '$lib/imgs/5.jpg';
	import KCU from '$lib/imgs/kcuCard.png';

	import Multipass from '$lib/imgs/multipass.png';

	import Sheeep from '$lib/imgs/sheepSilhouette.png';
	import Horse from '$lib/imgs/horseSilhouette2.png';
	import BullRider from '$lib/imgs/bullRiderSilhouette2.png';

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
	<section class="header-info">
		<article class="glass-Box">
			<p>
				<strong>Admission</strong><br />
				General Admission: $12<br />
				Seniors/Kids: $5<br />
				Under 5: Free<br />
				Parking: $10/day
			</p>
			<button><img src={Multipass} alt="kitsap fair entry ticket" /></button>
		</article>

		<article class="glass-Box">
			<p>
				<strong>Hours:</strong><br />
				Wed/Thu: 10am–9pm<br />
				Fri/Sat: 10am–10pm<br />
				Sun: 10am–6pm
			</p>
			<a href="/Entertainment/FairSchedule">
				<button class="btn-Shadow">Full Event</button>
			</a>
		</article>
	</section>
</header>

<aside class="alert">
	<p>THIS IS NOT A REAL WEBSITE AND YOU SHOULD ONLY PURCHASE FROM THE ACTUAL PAGE</p>
	<!-- <p>We are aware of fraudulent links. Tickets should only be purchased here or at the venue.</p> -->
</aside>

 <section
		style={`background-image: url(${KCU});`}
		class ="kcu-banner"
	><p>Kitsap credit union members can recieve a discount on admission:</p>

	<div class="center-wrapper">
		<a href="/Extra/Tickets">
			<button class="btn-Ghost">Save Money!</button>
		</a>
</div>
</section>
 

<main class="content">
	<section
		style={`background-image: url(${Sheeep}); background-size: cover; background-position: center;`}
	>
		<!-- <img src={Sheeep} alt="sheep silhouette" />  -->
		<h2>Main Entertainment</h2>
		<p>
			Rodeo: Wed–Fri 6:30pm<br />
			Sat 11:00am<br />
			Xtreme Bulls: Sun 11:00am<br />
			Jr. Livestock Auction: Sat 2:00pm<br />
			Thompson Square Concert: Sat 7:00pm
		</p>
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
 

	
<section class="blk-Western">
	<h3>FAIR DAY SPONSORS</h3>
	<p class="pointD">Wednesday: Opening at the Fair proudly sponsored by Joyce Construction</p>
	<p class="pointD">Thursday: Military Day proudly sponsored by Geico</p>
	<p class="pointD">Friday: Day at the Fair proudly sponsored by Kitsap Credit Union</p>
	<p class="pointD">
		Saturday: Kids Day at the Fair – Kids 12 and under come to the Fair free! proudly sponsored by
		Haselwood Auto Group
	</p>
	<p class="pointD">
		Sunday: Senior Day at the Fair – 62 and older come to the Fair free! proudly sponsored by Kitsap
		Credit Union
	</p>
</section>
<br />
<section class="blk-Western" 
		style={`background-image: url(${Horse}); background-size: cover; background-position: center;`}>
	<h3>KITSAP STAMPEDE SPONSORS</h3>
	<p class="pointD">Wednesday: Opening Night proudly sponsored by Agate Asphalt</p>
	<p class="pointD">
		Thursday: Patriot Night proudly sponsored by Virginia Mason Franciscan Health
	</p>
	<p class="pointD">Friday: Tough Enough to Wear Pink proudly sponsored Kitsap Credit Union</p>
	<p class="pointD">Saturday: Kids Day proudly sponsored by Haselwood Auto Group</p>

	<h2 class="pointC">XTREME BULLS SPONSOR</h2>
	<p class="pointD">Sunday: proudly sponsored by Hanley Construction</p>
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

<!--svelte-ignore css_unused_selector -->
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

		& button {
			all: unset;

			& img {
				width: 45vw;
			}
		}
	}

	.header-info {
		display: grid;
		position: absolute;
		left: 10%;
		bottom: 4rem;
		gap: 1rem;
		height: 45vh;
		width: 80vw;
		margin: 1rem auto;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

		& img {
			padding: 0;
			margin: 0;
		}
	}

	.slider {
		position: relative;
		overflow: hidden;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100vh; /* full viewport height */
		inset: 0; /* top:0; right:0; bottom:0; left:0 */
	}

	.slide {
		width: 100%;
		height: 100%;
		background-size: cover; /* fill space */
		background-repeat: no-repeat;
		background-position: left center; /* start from left */
		animation: pan 25s linear forwards infinite; /* pan effect */
	}

	@keyframes pan {
		from {
			background-position: left center;
		}
		to {
			background-position: right center;
		}
	}

	.center-wrapper {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center; 
		align-items: center; 
	}

	.alert {
		background: var(--accent-2);
		padding: 1rem;
		font-weight: 600;
		text-align: center;
	}

	.kcu-banner { 
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
		background-color: rgba(0, 0, 0, 0.5);

		& p {
			margin-top: 100px;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
		}
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
		padding: 0;
		margin: 0;
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
