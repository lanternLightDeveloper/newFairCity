<script lang="ts">
	import { IndoorCommercial, OutdoorCommercial } from '$lib/data/sponVendors';
	let open = $state(null);
</script>

<h1>Vendors</h1>

<p>THE LISTING BELOW IS IN ALPHABETICAL ORDER, AND DOES NOT INDICATE BOOTH PLACEMENT.</p>

<section>
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

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 16px;
		margin-top: 20px;
	}

	section > div {
		border-top: var(--bord-2);
		padding: 12px;
		transition: background 0.3s ease;
	}

	section > div:hover,
	section > div:focus {
		background-color: #f9f9f9;
		outline: none;
	}

	section h2 {
		margin: 0 0 8px;
		font-size: 1.2rem;
	}

	section p {
		margin: 0 0 8px;
	}

	section a {
		color: #0077cc;
		text-decoration: underline;
	}
</style>
