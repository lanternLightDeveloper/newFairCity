<script>
	import StillLife from './StillLife.svelte';
	import Livestock from './Livestock4h.svelte';

	let ShowStill = $state(false);
	let ShowLivestock = $state(false);
</script>

<h1>Exhibitor Guides</h1>

<p>If you bake it, make it or grow it, then show it at The Kitsap County Fair!</p>

<section>

	<button class="btn-Ghost" onclick={() => (ShowStill = !ShowStill)}>
		{ShowStill ? 'Hide' : 'Show'} Still Life Exhibitor Guide
	</button>
	
	<button class="btn-Ghost" onclick={() => (ShowLivestock = !ShowLivestock)}>
		{ShowLivestock ? 'Hide' : 'Show'} Livestock Exhibitor Guide
	</button>
</section>

{#if ShowStill}
	<StillLife />
{/if}

{#if ShowLivestock}
	<Livestock />
{/if}


<style>
	section {
		display: flex;
		justify-content: center;
		gap: var(--size-8);
		margin: var(--size-10) 0;
		flex-wrap: wrap;
	}

	button {
		min-width: 150px;
		font-size: var(--size-3);
	}
</style>