<script lang="ts">
	const images = import.meta.glob('$lib/imgs/submits/*.jpg', { eager: true });

	const imageEntries = Object.entries(images).map(([path, module]) => {
		// Extract filename from path
		const fileName = path.split('/').pop(); // e.g., "01_sunset.jpg"

		// Separate number and label
		const [rawIndex, ...labelParts] = fileName.replace('.jpg', '').split('_');
		const index = parseInt(rawIndex, 10);
		const label = labelParts.join(' ');

		return {
			src: module.default,
			index,
			label
		};
	});

	// Optional: sort by index
	imageEntries.sort((a, b) => a.index - b.index);

	let selectedImage = $state(null);

	let selectedIndex = $state(null);

	function openImage(image) {
		selectedIndex = imageEntries.findIndex((img) => img.src === image.src);
	}

	function closeModal() {
		selectedIndex = null;
	}

	function showNext() {
		if (selectedIndex < imageEntries.length - 1) {
			selectedIndex += 1;
		}
	}

	function showPrevious() {
		if (selectedIndex > 0) {
			selectedIndex -= 1;
		}
	}
</script>

<h1 id="pictures-heading">Pictures</h1>

<section class="image-gallery" aria-labelledby="pictures-heading">
	{#each imageEntries as image}
		<figure class="image-card">
			<button
				type="button"
				class="image-button"
				onclick={() => openImage(image)}
				aria-label={`View image ${image.index}: ${image.label}`}
			>
				<img src={image.src} alt={`Image ${image.index}: ${image.label}`} />
			</button>
		</figure>
	{/each}
</section>
{#if selectedIndex !== null}
	<dialog class="modal-overlay" open role="dialog" aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1">
			<h2 id="modal-title" class="visually-hidden">Image preview</h2>

			<div class="modal-nav">
				<button
					type="button"
					onclick={showPrevious}
					aria-label="Previous image"
					disabled={selectedIndex === 0}
				>
					←
				</button>

				<img src={imageEntries[selectedIndex].src} alt={imageEntries[selectedIndex].label} />

				<button
					type="button"
					class="btn-Pulse"
					onclick={showNext}
					aria-label="Next image"
					disabled={selectedIndex === imageEntries.length - 1}
				>
					→
				</button>
			</div>

			<p>{imageEntries[selectedIndex].label}</p>
			<button type="button" class="btn-Shadow" onclick={closeModal} aria-label="Close image preview"
				>Close</button
			>
		</div>
	</dialog>
{/if}

<style>
	.image-gallery {
		column-count: 3;
		column-gap: 1rem;
	}

	.image-card {
		break-inside: avoid;
		margin-bottom: 1rem;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.image-card img {
		width: 100%;
		height: auto;
		display: block;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.modal-content {
		background: white;
		padding: 1rem;
		border-radius: 8px;
		max-width: 90vw;
		max-height: 90vh;
		overflow: auto;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		text-align: center;
	}

	.modal-content img {
		max-width: 90%;
		height: auto;
		border-radius: 4px;
	}

	.modal-nav {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.modal-nav button {
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: #333;
	}

	.modal-nav button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
