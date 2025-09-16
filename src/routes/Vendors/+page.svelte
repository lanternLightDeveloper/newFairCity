<script lang="ts">
	import { IndoorCommercial, OutdoorCommercial } from '$lib/data/sponVendors';
	let open = $state(null);
</script>

<h1>Vendors</h1>

<p>THE LISTING BELOW IS IN ALPHABETICAL ORDER, AND DOES NOT INDICATE BOOTH PLACEMENT.</p>

<section class="glass-flip-grid">
	<h2>Outdoor</h2>
	{#each OutdoorCommercial as item, i}
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
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}

	<h2>Inside</h2>
	{#each IndoorCommercial as item, i}
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
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
