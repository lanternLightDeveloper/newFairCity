<script lang="ts">
	import Plan from '$lib/imgs/planSilhouette2.png';
	import Day from '$lib/imgs/daySilhouette.png';
	import Barn from '$lib/imgs/barnSilhouette2.png';
	import Stage from '$lib/imgs/stageSilhouette2.png';

	let { children } = $props();
</script>

<h1>Event schedules</h1>
<nav class="entertainment-nav">
	<a href="/Entertainment/Calendar"><img src={Plan} alt="schedule icon" /></a>
	<a href="/Entertainment/FairSchedule"><img src={Day} alt="day icon" /></a>
	<a href="/Entertainment/BarnSchedule"><img src={Barn} alt="barn icon" /></a>
	<a href="/Entertainment/Artists"><img src={Stage} alt="stage icon" /></a>
</nav>
<main>
	{@render children()}
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.entertainment-nav {
		display: flex;
		justify-content: center;
		gap: var(--size-6);
		width: 100vw;
	}

	a {
		color: var(--accent-1);
		border-bottom: var(--bord);
		font-weight: 500;
		margin: 2vh 0;

		& img {
			width: var(--size-9);
			background-color: var(--hallow-2);
		}

		&:hover,
		&:active {
			background-color: var(--hover);
			border-bottom: var(--bord-2);
		}
	}
</style>
