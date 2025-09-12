<script lang="ts">
	let open = $state(null);
	const testLink = 'https://newfaircity.netlify.app/';

	let items = [
		{ label: '19th Hole Bar and Grill' },
		{ label: 'Admiral Theater Foundation' },
		{ label: 'Agate Asphalt' },
		{ label: 'Ahoy Kitsap Playland' },
		{ label: 'All In Septic & Excavation' },
		{ label: 'AllCounty Operations' },
		{ label: 'Bagwell Law' },
		{ label: 'Bankrock Corp' },
		{ label: 'BJC Group Inc' },
		{ label: 'Boot Barn' },
		{ label: 'Brothers Powersports' },
		{ label: 'Budget Blinds' },
		{ label: 'C B Farrier Services' },
		{ label: 'C & C Development & Trucking' },
		{ label: 'Camp Union Properties' },
		{ label: 'Cascade Diesel' },
		{ label: 'Cornerstone Cleaning' },
		{ label: "Dana's Heating & Cooling" },
		{ label: 'Destination Harley Davidson' },
		{ label: 'Diane K. Golbeck, PLLC' },
		{ label: 'Fife RV' },
		{ label: 'Geico, Silverdale Office (Kevin Krieger)' },
		{ label: 'Gresham Pump & Drilling' },
		{ label: 'Grey Miles Co' },
		{ label: 'Hanley Constructions' },
		{ label: 'Haselwood Auto Group' }
	];
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
	{#each items as item, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Details for ${item.label}`}
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
					<h3>{item.label}</h3>
				</div>
				<div class="glass-back">
					<a href={testLink} target="_blank" rel="noopener">Visit Online Space</a>
				</div>
			</div>
		</div>
	{/each}
</section>
