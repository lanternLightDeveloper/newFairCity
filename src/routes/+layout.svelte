<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	import Menu from './Menu.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Menu />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
