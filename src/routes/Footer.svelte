<script>
	import PhotoDisclaimer from './PhotoDisclaimer.svelte';
	import PetDisclaimer from './PetDisclaimer.svelte';

	let photoDisclaimer = $state(false);
	let petDisclaimer = $state(false);

	function openDisclaimer() {
		photoDisclaimer = true;
		petDisclaimer = true;
	}

	function closeModal() {
		photoDisclaimer = false;
		petDisclaimer = false;
	}
</script>

{#if photoDisclaimer}
	<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1" autofocus>
			<PhotoDisclaimer />

			<button
				type="button"
				class="btn-Ghost"
				onclick={closeModal}
				aria-label="Close photo disclaimer"
			>
				Close
			</button>
		</div>
	</dialog>
{/if}

{#if petDisclaimer}
	<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1" autofocus>
			<PetDisclaimer />

			<button
				type="button"
				class="btn-Ghost"
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
		<button
			class="btn-Ghost"
			type="button"
			onclick={() => (photoDisclaimer = true)}
			aria-label="View photo disclaimer"
		>
			Photo Disclaimer
		</button>

		<button
			class="btn-Ghost"
			type="button"
			onclick={() => (petDisclaimer = true)}
			aria-label="View pet disclaimer"
		>
			Pet Disclaimer
		</button>
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		padding: 1rem;
		gap: 0.5rem;
	}

	footer section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	footer section button {
		padding: 0.5rem 1rem;
		font-size: var(--size-4);
		border: 1px solid var(--txt-1);
		background-color: transparent;
		color: var(--txt-1);
		border-radius: var(--rad-Sm);
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	footer section button:hover {
		background-color: var(--hover);
		color: #fff;
	}

	footer p {
		text-align: center;
		font-size: var(--size-4);
		margin: 0.5rem 0;
	}

	footer a {
		color: var(--hover);
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
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
		border: var(--bord);
		padding: 1rem;
		max-width: 90vw;
		max-height: 90vh;
		overflow-y: auto;
		text-align: center;

		& .btn-Ghost {
			color: var(--bg-1);
		}
	}
</style>
