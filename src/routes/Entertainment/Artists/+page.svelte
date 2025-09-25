<script lang="ts">
	import { Artists } from '$lib/data/entertainment';
	let openArtistCard = $state<number | null>(null);

	function toggleArtistCard(index: number) {
		openArtistCard = openArtistCard === index ? null : index;
	}
</script>

<h2>Artists</h2>

<p>Apply to perform at the Fair??</p>

<div class="grid-5col">
	{#each Artists as artist, i}
		<article class="grid-content-box" style={`background-image: url(${artist.img});  `}>
			<div class="filter">

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
					<!-- <img src="{artist.img}" alt=" {artist.name} image" loading="lazy" /> -->
					{#if artist.video}
					<p><a href={artist.video} target="_blank" rel="noopener">Watch Video</a></p>
					{/if}
				</div>
				{/if}
			</div>
		</article>
	{/each}
</div>

<!--svelte-ignore css_unused_selector -->
<style>
	button {
		all: unset;
		cursor: pointer;
	}

	header {
		margin: 0;
		padding: 0;
	}
 
	.grid-content-box {
			padding: 0;
			margin: 0;
		border-radius: var(--rad-Sm);
		text-align: left;
		border: var(--bord);
		transition:
			box-shadow 0.3s ease,
			transform 0.2s ease;
		cursor: pointer;
		background-size: cover; 
		background-position: center;

		.filter {
			padding: 0;
			margin: 0;
			height: 100%;
			width: 100%;
			background-size: cover;
			border-radius: var(--rad-Sm);
			background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
		}
	}

	.grid-content-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.grid-content-box h3 {
		padding: 0.5rem 1rem ;
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.genre-tag {
		background: var(--accent-1, #4caf50);
		padding:0.5rem 1rem;
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
		padding: 0.5rem 1rem;
	}

	.card-details {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--txt-2, #444);
	}

	a, button {
		padding: 0.5rem 1rem;
		color: var(--accent-1);
		text-decoration: underline;
		font-weight: 500;
	}
</style>
