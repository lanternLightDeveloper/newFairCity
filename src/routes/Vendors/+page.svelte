<script lang="ts">
	import { IndoorCommercial, OutdoorCommercial } from '$lib/data/sponVendors';
	let open = $state(null);
</script>

<h1>Vendors</h1>

<p>THE LISTING BELOW IS IN ALPHABETICAL ORDER, AND DOES NOT INDICATE BOOTH PLACEMENT.</p>

<section class="grid-List">
	<h3>Outside</h3>
	{#each OutdoorCommercial as item, i}
		<div
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
			<div aria-hidden={open !== i}>
				<div>
					<h2>{item.label}</h2>
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}

	<h3>Inside</h3>
	{#each IndoorCommercial as item, i}
		<div
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
			<div aria-hidden={open !== i}>
				<div>
					<h2>{item.label}</h2>
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
