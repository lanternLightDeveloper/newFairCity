<script>
	import TheFairIsOn from './TheFairIsOn.svelte';
	import TheFairIsOff from './TheFairIsOff.svelte';
	// Get current date
	const today = new Date();

	// Define start and end of “fair season”
	const start = new Date(today.getFullYear(), 6, 1); // Months are 0-indexed → 6 = July
	const end = new Date(today.getFullYear(), 8, 1); // 8 = September

	// Check if today is within range
	const isFairSeason = today >= start && today < end;

	let fairSeason = $state(true);
</script>

<!-- 
	{#if isFairSeason}
		<TheFairIsOn />
		{:else}
		<TheFairIsOff />
		{/if} -->

{#if fairSeason}
	<TheFairIsOn />
{:else}
	<TheFairIsOff />
{/if}
<section class="marg_Also">
	<p>
		This button will switch this page to the "Fair off/on season". In use it would be date based so
		there would be no worry about having to change the site
	</p>
	<button class="btn-Ghost marg_Also" onclick={() => (fairSeason = !fairSeason)}>Fair season</button
	>
</section>
