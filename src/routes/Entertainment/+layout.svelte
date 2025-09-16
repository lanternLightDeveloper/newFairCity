<script lang="ts">
	let { children } = $props();
</script>

<nav class="entertainment-nav">
	<a href="/Entertainment/FairSchedule">Fair Schedule</a>
	<a href="/Entertainment/BarnSchedule">Barn Schedule</a>
	<a href="/Entertainment/Artists">Artists</a>
</nav>

<main>
	{@render children()}
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	a {
		color: var(--accent-1);
		text-decoration: underline;
		font-weight: 500;
	}
</style>
