<script lang="ts">
	import { Sponsors } from '$lib/data/sponVendors';
	let open = $state(null);
	const testLink = 'https://newfaircity.netlify.app/';
</script>

<h1>Sponsors</h1>
 

	<div class="center-wrapper">
		<a href="/Extra/SponsorGuide">
<button class="btn-Ghost"> Submit to sponsor </button>
		</a>
</div>

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
<section class="blk-Western">
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

<p>
	Visit the websites of our generous sponsors. Learn more about these amazing companies that are
	supporting our Fair and your community.​​
</p>

<section class="sponsorSection">
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
					<a href={testLink} target="_blank" rel="noopener"> Visit site</a>
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
 

		.center-wrapper {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center; 
		align-items: center; 
	}

	.sponsorSection {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px;
		margin-top: 20px;
	}

	.sponsorSection > div {
		border-top: var(--bord-2);
		padding: 12px;
		transition: background 0.3s ease;
	}

	.sponsorSection > div:hover,
	.sponsorSection > div:focus {
		background-color: var(--txt-2);
		color: var(--bg-1);
		outline: none;
	}

	.sponsorSection h2 {
		margin: 0 0 8px;
		font-size: 1.2rem;
	}

	.sponsorSection p {
		margin: 0 0 8px;
	}

	.sponsorSection a {
		color: #0077cc;
		text-decoration: underline;
	}
</style>
