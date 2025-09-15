<script lang="ts">
	import { Sponsors } from '$lib/data/sponVendors';
	let open = $state(null);
	const testLink = 'https://newfaircity.netlify.app/';
</script>

<h1>Sponsors</h1>

<p>
	FAIR DAY SPONSORS Wednesday: Opening at the Fair proudly sponsored by Joyce Construction Thursday:
	Military Day proudly sponsored by Geico Local Friday: Day at the Fair proudly sponsored by Kitsap
	Credit Union Saturday: Kids Day at the Fair – Kids 12 and under come to the Fair free! proudly
	sponsored Haselwood Auto Group Sunday: Senior Day at the Fair – 62 and older come to the Fair
	free! proudly sponsored Kitsap Credit Union
</p>

<p>
	​KITSAP STAMPEDE SPONSORS Wednesday: Opening Night proudly sponsored by Agate Asphalt Thursday:
	Patriot Night proudly sponsored by Virginia Mason Franciscan Health Friday: Tough Enough to Wear
	Pink proudly sponsored Kitsap Credit Union Saturday: Kids Day proudly sponsored by Haselwood Auto
	Group​ ​​​XTREME BULLS SPONSOR Sunday: proudly sponsored by Hanley Construction
</p>

<p>
	Visit the websites of our generous sponsors. Learn more about these amazing companies that are
	supporting our Fair and your community.​​
</p>

<section class="glass-flip-grid">
	{#each Sponsors as sponsor, i}
		<div
			class="glass-flip-card"
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
			<div class="glass-flip-inner" aria-hidden={open !== i}>
				<div class="glass-front">
					<h3>{sponsor.label}</h3>
					<p>{sponsor.info}</p>
				</div>
				<div class="glass-back">
					<a href={testLink} target="_blank" rel="noopener">Visit Online Space</a>
				</div>
			</div>
		</div>
	{/each}
</section>
