<script>
	import GroundsMap from '$lib/imgs/mapOfFair.png';

	let mapZoom = $state(false);

	function zoomOnMap() {
		mapZoom = true;
	}

	function closeModal() {
		mapZoom = false;
	}
</script>

<h1>Kitsap County Fairgrounds</h1>

<p>
	You can find the full list of facilities on the Kitsap County Parks Website <a
		href="https://kitsapparks.recdesk.com/Community/Facility"
	>
		here</a
	>
</p>

<ul class="marg_Also">
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=15"
			>A: Swine Barn</a
		>
	</li>
	<li>B: Bound Arena</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=119"
			>C: Rabbit Barn</a
		>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=12"
			>D: Concert Park Field</a
		>
	</li>

	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=7"
			>E: Sheep Barn</a
		>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=9">F: Cat Barn</a>
	</li>

	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=11"
			>G: President's Hall Field</a
		>
	</li>

	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=6">H: Van Zee</a>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=5"
			>I: President's Hall</a
		>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=8">J: Goat Barn</a
		>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=3">K: Pavilion</a>
	</li>
	<li>L: Rodeo Arena</li>

	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=16"
			>M: Eagles Nest Field/Parking Lot</a
		>
	</li>
	<li>
		<a href="https://kitsapparks.recdesk.com/Community/Facility/Detail?facilityId=28"
			>N: Lower Bowl</a
		>
	</li>
</ul>

<button onclick={zoomOnMap}>
	<img src={GroundsMap} alt="Kitsap County Fairgrounds Map" class="full-Width" />
</button>
{#if mapZoom}
	<dialog class="modal-overlay" open aria-modal="true" aria-labelledby="modal-title">
		<div class="modal-content" tabindex="-1" autofocus>
			<div class="map-scroll-container">
				<img src={GroundsMap} alt="Kitsap County Fairgrounds Map" class="zoomed-map" />
			</div>

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

<style>
	button {
		all: unset;
	}

	img {
		width: 60%;
		margin-left: 20%;
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
		color: var(--bg-1);
		border: var(--bord);
		padding: 0;
		margin: 0;
		overflow-y: auto;
		text-align: center;

		& img {
			width: 100%;
		}

		& .btn-Ghost {
			color: var(--bg-1);
		}
	}

	.zoomed-map {
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.map-scroll-container {
		overflow: scroll;

		& img {
			transform: scale(1.2);
			padding: 0;
			margin: 0;
		}
	}

	/* Desktop Screen */
	@media (min-width: 1024px) {
		img {
			width: 60%;
			margin-left: 20%;
		}
	}
	/* 
@media (min-width: 1440px) {
    :is(h1, h2, h3, h4, p, .marg_Also) {
    margin: var(--space-Lg);
}

    .blankSpace {
        margin: var(--space-Full);
    }
}  */
</style>
