<script>
	import StillLife from './StillLife.svelte';
	import Livestock from './Livestock4h.svelte';

	let ShowStill = $state(false);
	let ShowLivestock = $state(false);
</script>

<h1>Exhibitor Guides</h1>

<p>If you bake it, make it or grow it, then show it at The Kitsap County Fair!</p>

<button onclick={() => (ShowStill = !ShowStill)}>
	{ShowStill ? 'Hide' : 'Show'} Still Life Exhibitor Guide
</button>

<button onclick={() => (ShowLivestock = !ShowLivestock)}>
	{ShowLivestock ? 'Hide' : 'Show'} Livestock Exhibitor Guide
</button>

{#if ShowStill}
	<StillLife />
{/if}

{#if ShowLivestock}
	<Livestock />
{/if}
