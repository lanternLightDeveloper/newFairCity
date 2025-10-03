<script lang="ts">
	import Rodeo from '$lib/imgs/3.jpg';
	import HorseRide from '$lib/imgs/caroselSilhouette2.png';
</script>

<header class="carnival-hero">
	<div class="overlay">
		<h1>Carnival at Kitsap Fair</h1>
		<p class="light-White">
			Funtastic Shows returns with the best rides, games, and thrills in the Northwest!
		</p>
	</div>
	<img src={Rodeo} alt="Carnival rides and crowd in a fairground" />
</header>

<main
	style={`background-image: url(${HorseRide}); background-size: cover; background-position: center;`}
	class="grid-Main"
>
	<section class="block-List double-Block">
		<h4>Carnival Hours</h4>

		<p>
			Wednesday - Saturday:<strong>1:00am – 11:00pm</strong>
		</p>
		<p>
			Sunday:<strong>11:00am – 7:00pm</strong>
			<br /><em>Sun = Wristband Day until 6:00pm – unlimited rides + 3 games for $50!</em>
		</p>
	</section>

	<p class="double-Block light-Back">
		Returning to the 2025 Kitsap Fair and Rodeo, the best carnival in the Northwest! Funtastic Shows
		will be providing the carnival and games. You are familiar with their safety and quality
		standards if you have adventured to the Washington State Fair.
	</p>

	<p class="double-Block light-Back">
		All rides and games will be in one designated area so your family of all ages can enjoy the fun
		together.
	</p>

	<p class="double-Block light-Back">
		GOOD NEWS! Carnival wristbands will be back for this year's fair. Wristband day will be Sunday,
		Aug. 24. Wristbands will be $50 per individual and non-transferable. Ride as many rides as you'd
		like and play three (games) between 11:00am and 6:00pm with your wristband. These can be
		purchased at the carnival ticket booths on wristband day only - no pre-sales.
	</p>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.carnival-hero {
		position: relative;
		height: 60vh;
		overflow: hidden;
	}

	.carnival-hero img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.carnival-hero .overlay {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	.carnival-hero h1 {
		font-size: 2.5rem;
		color: #f8e71c;
		text-shadow: 2px 2px #000;
		margin-bottom: 0.5rem;
	}

	.carnival-hero p {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}

	.grid-Main {
		.light-Back {
			@media (prefers-color-scheme: light) {
				background-color: color-mix(in oklch, var(--bg-1) 80%, transparent 25%);
				border-radius: 3px;
			}
		}
	}
</style>
