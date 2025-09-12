<script lang="ts">
	import { BarnSchedule } from '$lib/data/entertainment';
	let openBarnCard = $state<number | null>(null);

	function toggleBarnCard(index: number) {
		openBarnCard = openBarnCard === index ? null : index;
	}
</script>

<h3>Barn Schedule</h3>

{#each BarnSchedule as barnDay, i}
	<div class="card schedule-wrapper">
		<button class="card-header" onclick={() => toggleBarnCard(i)}>
			{barnDay.day}
			<span class="arrow" class:rotate={openBarnCard === i}> ▶</span>
		</button>

		{#if openBarnCard === i}
			<div class="card-content">
				{#each barnDay.events as event}
					<p>{event}</p>
				{/each}
			</div>
		{/if}
	</div>
{/each}

<!--svelte-ignore css_unused_selector -->
<style>
	button {
		all: unset;
		cursor: pointer;
	}

	/* Container to center cards */
	.schedule-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90vw;
		margin-left: 5vw;
	}

	.card-header {
		width: 100%;
		background: var(--bg-2);
		margin-top: 1vh;
		padding: 0.75rem 1rem;
		text-align: left;
		border-radius: var(--rad-Sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-content {
		width: 100%;
		background: var(--bg-2);
		margin-top: 1vh;
		text-align: left;
		border-radius: var(--rad-Sm);
		padding: 0.25rem 0.25rem;

		& p {
			padding: 0.5rem 0;
			margin: 0.5rem 0;

			border-bottom: 1px dashed var(--border-color);
		}

		& :last-child {
			border-bottom: none;
		}
	}
</style>
