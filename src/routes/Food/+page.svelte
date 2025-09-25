<script lang="ts">
	import { Fooders } from '$lib/data/sponVendors';

	let open = $state(null);
</script>

<h1>Food</h1>

<p class="notice">
	​​*Indicates this concessionaire is only located on the arena side but no event ticket is required
	unless an event is occurring in the arena. ​**Indicates this concessionaire is only located on the
	arena side and an event ticket is required. ​
</p>
<section class="glass-flip-grid">
	{#each Fooders as food, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Menu for ${food.label}`}
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
					<h3>{food.label}</h3>
					<p>{food.info}</p>
				</div>
				<div class="glass-back">
					<ul>
						{#each food.popularItems.split(',') as item}
							<li>{item.trim()}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</section>

<!--svelte-ignore css_unused_selector -->
<style>
	.glass-front {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		& p,
		h3 {
			margin: 0;
			padding: 0vh 1vw;
		}

		& h3 {
			position: relative;
			top: 0;

			border-bottom: var(--bord-2);
		}
	}
</style>
