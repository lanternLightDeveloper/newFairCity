<script>
	import { ExhibitorForms } from '$lib/data/linkToThere.js';

	let open = $state(1);

	let backgroundImage = $derived.by(() => {
		const selected = ExhibitorForms[open];
		return selected?.img ?? null;
	});
</script>

<h1>Still Life</h1>

<section>
	<h2>
	Still Life (Presidents Hall) <br />
	</h2>

	<ul>
		<li>
			Entry Fee: FREE
			
		</li>

		<li>
			Register on intake days; DO NOT use FairEntry (used for livestock only) <br />
		</li>

		<li>
			FFA & 4-H entries need to visit the livestock page and register using Fair Entry! <br />
		</li>
	</ul> 

	<h2>

		​ EXHIBITOR INTAKE DAYS:  
	</h2>

	<ul>
		<li>
Crafts & Hobbies, Home Arts, Art & Photography: <br> Sat & Sun, Aug. 9th-10th, 10am to 6pm in the
	Presidents Hall
		</li>
		
		<li>
			Food, Canning & Honey: <br> Sun, Aug. 17, 10am to 6pm in the Presidents Hall  
		</li>

		<li>

			Horticulture: Mon, Aug. 18, 12pm - 8pm in the Presidents Hall <br />
		</li>

		<li>
			Floral: <br> Mon, Aug. 18, 12pm - 8pm in the Pavilion <br />

		</li>
	</ul>

	<h2>
		​ ​ALL OPEN CLASS ENTRIES RECEIVE:  
	</h2>

	<ul>
		<li>
			One 5-day fair admission pass (one per exhibitor)​ <br />
		</li>
		<li>
			The option to purchase a $10 parking pass for the duration of this year's fair <br />
		</li>
	</ul> 
</section>


<p>​ Any questions about the exhibitor guides, email phall.stilllife@gmail.com</p>




<h2>Entry Guides & Rules</h2>
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


<style>
	/* Lists */
	ul {
		width: 90vw;
		list-style: disc;
		padding-left: 1.5rem;
		margin: 1.5rem 5vw;
	}

	dl {
		margin: 2rem 5vw;
		width: 90vw;
	}

	dt {
		font-weight: bold;
		color: var(--hover);
		margin-top: 1rem;
	}

	dd {
		margin-left: 1rem;
	}
 
</style>
