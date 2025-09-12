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
