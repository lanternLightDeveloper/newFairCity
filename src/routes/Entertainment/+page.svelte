<script lang="ts">
	import { Schedule, BarnSchedule, Artists } from '$lib/data/entertainment';

	let openScheduleCard = $state<number | null>(null);
	let openBarnCard = $state<number | null>(null);
	let openArtistCard = $state<number | null>(null);

	function toggleScheduleCard(index: number) {
		openScheduleCard = openScheduleCard === index ? null : index;
	}

	function toggleBarnCard(index: number) {
		openBarnCard = openBarnCard === index ? null : index;
	}

	function toggleArtistCard(index: number) {
		openArtistCard = openArtistCard === index ? null : index;
	}
</script>

<h2>Fair Schedule 2025</h2>

{#each Schedule as day, i}
	<div class="card schedule-wrapper">
		<button class="card-header" onclick={() => toggleScheduleCard(i)}>
			{day.day}
			<span class="arrow" class:rotate={openScheduleCard === i}> ▶</span>
		</button>

		{#if openScheduleCard === i}
			<div class="card-content">
				<p><em>{day.sponsor}</em></p>
				{#each day.events as event}
					<p>{event}</p>
				{/each}
			</div>
		{/if}
	</div>
{/each}

<h3>Barn Schedule:</h3>

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

<p>Artists</p>
<div class="grid-5col">
	{#each Artists as artist, i}
		<article class="grid-content-box">
			<header>
				<h3 id={`artist-title-${i}`}>
					{artist.name}
					<span class="genre-tag">{artist.genre}</span>
				</h3>
				<p class="teaser">{artist.teaser}</p>
				{#if artist.website}
					<p><a href={artist.website} target="_blank" rel="noopener">Visit Website</a></p>
				{/if}
				<button
					class="toggle-details"
					onclick={() => toggleArtistCard(i)}
					aria-expanded={openArtistCard === i}
					aria-controls={`artist-details-${i}`}
					aria-labelledby={`artist-title-${i}`}
				>
					{openArtistCard === i ? 'Hide Details' : 'Show Details'}
				</button>
			</header>

			{#if openArtistCard === i}
				<div
					class="card-details"
					id={`artist-details-${i}`}
					role="region"
					aria-labelledby={`artist-title-${i}`}
				>
					<p>{artist.description}</p>
					{#if artist.video}
						<p><a href={artist.video} target="_blank" rel="noopener">Watch Video</a></p>
					{/if}
				</div>
			{/if}
		</article>
	{/each}
</div>

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
			padding: 0;
			margin: 0.55rem 0;

			border-bottom: 1px dashed var(--border-color);

			& :last-child {
				border-bottom: none;
			}
		}
	}

	.grid-content-box {
		padding: 1rem;
		border-radius: var(--rad-Sm);
		text-align: left;
		border: var(--bord);
		transition:
			box-shadow 0.3s ease,
			transform 0.2s ease;
		cursor: pointer;
	}

	.grid-content-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.grid-content-box h3 {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.arrow {
		display: inline-block;
		transition: transform 0.3s ease;
	}

	.rotate {
		transform: rotate(90deg);
	}

	.genre-tag {
		background: var(--accent-1, #4caf50);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		font-size: 0.85rem;
		font-weight: 500;
		margin-left: 0.5rem;
	}

	.teaser {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		color: var(--txt-1, #333);
	}

	.card-details {
		margin-top: 1rem;
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--txt-2, #444);
	}

	a {
		color: var(--accent-1);
		text-decoration: underline;
		font-weight: 500;
	}
</style>
