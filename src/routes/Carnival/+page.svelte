<script lang="ts">
	import Rodeo from '$lib/imgs/3.jpg';
</script>

<header class="carnival-hero">
	<div class="overlay">
		<h1>Carnival at Kitsap Fair</h1>
		<p>🎠 Funtastic Shows returns with the best rides, games, and thrills in the Northwest!</p>
		<a href="#hours" class="cta-button">View Carnival Hours</a>
	</div>
	<img src={Rodeo} alt="Carnival rides and crowd in a fairground" />
</header>

<section id="hours" class="blk-Western">
	<h3>Carnival Hours</h3>

	<p>
		<strong>Wednesday - Saturday:</strong>
		<br /> 11:00am – 11:00pm
	</p>
	<br />
	<p>
		<strong>Sunday:</strong> 11:00am – 7:00pm
		<br /><em>🎟 Wristband Day until 6:00pm – unlimited rides + 3 games for $50!</em>
	</p>
</section>

<main>
	<p>
		Returning to the 2025 Kitsap Fair and Rodeo, the best carnival in the Northwest! Funtastic Shows
		will be providing the carnival and games. You are familiar with their safety and quality
		standards if you have adventured to the Washington State Fair.
	</p>

	<p>
		All rides and games will be in one designated area so your family of all ages can enjoy the fun
		together.
	</p>

	<p>
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
		color: white;
		text-align: center;
		padding: 2rem;
		background: rgba(0, 0, 0, 0.5); /* optional for readability */
		border-radius: 12px;
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

	.cta-button {
		display: inline-block;
		background: #8b0000;
		color: #fff;
		padding: 0.6rem 1.2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: bold;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		transition: background 0.3s ease;
	}

	.cta-button:hover {
		background: #a52a2a;
	}

	.carnival-hours {
		background: #fff8dc;
		border: 2px solid #8b4513;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem auto;
		max-width: 600px;
		font-family: 'Cinzel', serif;
		color: #4b2e1e;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.carnival-hours h2 {
		color: #8b0000;
		font-size: 1.8rem;
		margin-bottom: 1rem;
		text-align: center;
	}

	.carnival-hours ul {
		list-style: none;
		padding: 0;
	}

	.carnival-hours li {
		padding: 0.5rem 0;
		border-bottom: 1px dashed #8b4513;
	}

	.carnival-hours li:last-child {
		border-bottom: none;
	}

	.carnival-hours em {
		color: #d2691e;
		font-style: italic;
	}
</style>
