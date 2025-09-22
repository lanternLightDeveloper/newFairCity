<script>
	import { ExhibitorForms } from '$lib/data/linkToThere.js';

	let open = $state(1);

	let backgroundImage = $derived.by(() => {
		const selected = ExhibitorForms[open];
		return selected?.img ?? null;
	});
</script>

<h1>Still Life</h1>

<p>
	Still Life (Presidents Hall) <br />
	ENTRY FEE: <br />

	FREE <br />

	Register on intake days; DO NOT use FairEntry (used for livestock only) <br />

	FFA & 4-H entries need to visit the livestock page and register using Fair Entry! <br />

	​ EXHIBITOR INTAKE DAYS: <br />

	Crafts & Hobbies, Home Arts, Art & Photography: Sat & Sun, Aug. 9th-10th, 10am to 6pm in the
	Presidents Hall <br />

	Food, Canning & Honey: Sun, Aug. 17, 10am to 6pm in the Presidents Hall <br />

	Horticulture: Mon, Aug. 18, 12pm - 8pm in the Presidents Hall <br />

	Floral: Mon, Aug. 18, 12pm - 8pm in the Pavilion <br />

	​ ​ALL OPEN CLASS ENTRIES RECEIVE: <br />

	One 5-day fair admission pass (one per exhibitor)​ <br />

	The option to purchase a $10 parking pass for the duration of this year's fair <br />
</p>

<h2>Points of interest</h2>
<section class="glass-flip-grid" style={`background-image: url('${backgroundImage}');`}>
	{#each ExhibitorForms as formItems, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Details for ${formItems.label}`}
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
					<h3>{formItems.label}</h3>
				</div>
				<div class="glass-back">
					<a href={formItems.href}>Visit {formItems.label}</a>
				</div>
			</div>
		</div>
	{/each}
</section>

<p>​ Any questions about the exhibitor guides, email phall.stilllife@gmail.com</p>
