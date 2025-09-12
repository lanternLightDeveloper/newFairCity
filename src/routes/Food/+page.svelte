<script lang="ts">
	let open = $state(null);

	let items = [
		{ label: 'Bean Water', info: 'Espresso, lemonade, hot chocolate' },
		{ label: 'Belfair Pop', info: 'Kettle corn, cotton candy, treats, lemonade' },
		{ label: "Big Joe's Sandwich Shop", info: 'Sandwiches, fries, soda' },
		{
			label: 'Carlson Catering Fry Shop',
			info: 'Burgers, hot dogs, Philly cheese, cheese sandwiches, chicken strips, fries, elephant ears, lemonade, water'
		},
		{ label: 'Carlson Catering Snowie', info: 'Shaved ice and lemonade' },
		{ label: 'Character Cotton Candy', info: 'Character cotton candy, fruit kiss drinks' },
		{ label: "Crazy Eric's", info: 'Burgers, corn dogs, fries, soda, snacks' },
		{ label: 'Creativitin', info: 'Cheesecake on a stick' },
		{ label: "Domino's Pizza", info: 'Pizza and soda' },
		{
			label: 'Fast & Fresh Foods',
			info: 'Korean corn dogs, gyros, chicken fritters, fries, water, soda'
		},
		{ label: 'Fisher Fair Scones', info: 'Scones' },
		{ label: "Fridley's Ice Cream", info: 'Flavor Burst ice cream' },
		{ label: 'Funnel of Love', info: 'Funnel cakes, elephant ears, deep fried treats' },
		{ label: 'G&M Lemon Shake Ups', info: 'Lemonade, lotus lemonade, iced tea' },
		{ label: 'Iced Up', info: 'Asian gourmet ice' },
		{ label: 'International Fair Foods', info: 'Greek food, gyros, salads, drinks' },
		{ label: 'Island Lumpia', info: 'Assorted lumpia flavors' },
		{ label: "Kama'aina Grill", info: 'Hawaiian food' },
		{ label: 'Kona Ice', info: 'Shaved ice treats' },
		{ label: 'LaChurrreria J&JJ', info: '(Menu not listed)' },
		{ label: 'Pinoy Kitchen', info: 'Filipino food' },
		{ label: "Ramblin' Gourmet", info: 'Burgers, corn dogs, fries, coffee, soda' },
		{ label: "Smokin' Robinson", info: 'St Louis style BBQ' },
		{ label: 'Southern Oregon Concessions', info: 'Burgers, fries, corn dogs, soda, water' },
		{ label: 'Squatch Snacks', info: 'Roasted corn, loaded baked potatoes, soda' },
		{
			label: 'Sugar & Spice Mini Donuts',
			info: 'Mini donuts, cheese curds, tater tots, pineapple soft serve, hand-dipped corndogs, pretzels, coffee, lemonade, water'
		},
		{ label: 'Taqueria el Campesino', info: 'Tacos, tortas, tamales, fruit, elotes, beverages' },
		{ label: 'Viking Feast Ice Cream', info: 'Ice cream treats' },
		{ label: 'Western Red Brewery', info: 'Beer garden' }
	];
</script>

<h1>Food</h1>

<p>
	​​*Indicates this concessionaire is only located on the arena side but no event ticket is required
	unless an event is occurring in the arena. ​**Indicates this concessionaire is only located on the
	arena side and an event ticket is required. ​
</p>
<section class="glass-flip-grid">
	{#each items as item, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Menu for ${item.label}`}
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
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
