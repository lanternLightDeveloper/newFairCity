<script>
	import PhotoDisclaimer from './PhotoDisclaimer.svelte';

	let ShowDisclaimer = $state(false);

	function openDisclaimer() {
		ShowDisclaimer = true;
	}

	function closeModal() {
		ShowDisclaimer = false;
	}
</script>

{#if ShowDisclaimer}
	<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1" autofocus>
			<PhotoDisclaimer />

			<button
				type="button"
				class="btn-Shadow"
				onclick={closeModal}
				aria-label="Close photo disclaimer"
			>
				Close
			</button>
		</div>
	</dialog>
{/if}

<footer>
	<section>
		<figure>
			<button type="button" onclick={openDisclaimer} aria-label="View photo disclaimer">
				View Photo Disclaimer
			</button>
		</figure>
	</section>

	<p>
		Produced by <a href="https://www.lanternlightdevelopment.com/">Lantern Light Development</a>
	</p>
</footer>

<!-- svelte-ignore css_unused_selector -->
<style>
	footer {
		background-color: var(--bg-2);
		color: var(--txt-1);
		display: flex;
		justify-content: center;
		position: relative;
		bottom: 0;
		width: 100vw;
		height: 4vh;
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--size-1);
		margin: var(--size-4);
		gap: 10px;
	}

	a {
		color: var(--hover);
	}

	@media only screen and (min-width: 980px) {
		p {
			font-size: var(--size-4);
		}
	}

	.modal-overlay {
		position: fixed;
		display: flex;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.modal-content {
		background: var(--txt-2);
		padding: 1rem;
		max-width: 90vw;
		max-height: 80vh;
		overflow-y: auto;
		text-align: center;
	}
</style>
