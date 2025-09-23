<script lang="ts">
	import { Schedule } from '$lib/data/entertainment';
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
		gap: var(--size-8);
	}

	a {
		color: var(--accent-1);
		border-bottom: var(--bord);
		font-weight: 500;

		& img {
			width: var(--size-10);
			background-color: var(--hallow-2);
		}

		&:hover {
			background-color: var(--hover);
			border-bottom: var(--bord-2);

			& img {
				background-color: var(--hallow-1);
			}
		}
	}
</style>
