<script lang="ts">
	import { Sponsors } from '$lib/data/sponVendors';
	let open = $state(null);
	const testLink = 'https://newfaircity.netlify.app/';
</script>

<h1>Sponsors</h1>

<br />
<div class="center-wrapper">
	<a href="/Extra/SponsorGuide">
		<button class="btn-Ghost"> Submit to be a sponsor today!</button>
	</a>
</div>
<br />

<main class="grid-Main">
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

	<section class="block-List">
		<h4>KITSAP STAMPEDE SPONSORS</h4>
		<p>Wednesday: Opening Night proudly sponsored by Agate Asphalt</p>
		<p>Thursday: Patriot Night proudly sponsored by Virginia Mason Franciscan Health</p>
		<p>Friday: Tough Enough to Wear Pink proudly sponsored Kitsap Credit Union</p>
		<p>Saturday: Kids Day proudly sponsored by Haselwood Auto Group</p>

		<h2>XTREME BULLS SPONSOR</h2>
		<p>Sunday: proudly sponsored by Hanley Construction</p>
	</section>

	<p class="right-Block">
		Visit the websites of our generous sponsors. Learn more about these amazing companies that are
		supporting our Fair and your community.​​
	</p>

	<section class="grid-List right-Block">
		{#each Sponsors as sponsor, i}
			<div
				tabindex="0"
				role="button"
				aria-label={`Details for ${sponsor.label}`}
				onmouseenter={() => (open = i)}
				onmouseleave={() => (open = null)}
				onfocus={() => (open = i)}
				onblur={() => (open = null)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						open = i;
						e.preventDefault();
					}
				}}
			>
				<div aria-hidden={open !== i}>
					<div>
						<h2>{sponsor.label}</h2>
						<p>{sponsor.info}</p>
						<br />
						<a href={testLink} target="_blank" rel="noopener"> Visit </a>
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
