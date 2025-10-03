<script>
	import AuctionFace from '$lib/imgs/auctionSilhouette2.png';
</script>

<main class="grid-Main">
	<section
		class="double-Block"
		style={`background-image: url(${AuctionFace}); background-size: cover; background-position: center;`}
	>
		<h1>Kitsap Junior Livestock Auction</h1>
		<p class="light-Back">
			Advancing youth interest in agriculture and livestock management through ethics, education,
			and community support.
		</p>

		<h2>Location & Time</h2>

		<p><strong> Where: </strong></p>
		<p>Kitsap Fair & Stampede, 1300 NW Fairgrounds Rd, Bremerton, WA</p>
		<p><strong> When: </strong></p>
		<p>Saturday, August 23, 2025 at 2:00pm</p>
		<p>Register online or arrive early to bid in person.</p>
	</section>

	<a href="/Extra/InfoSheets" class="center-wrapper double-Block">
		<button class="btn-Ghost"> Download The Information Sheet </button>
	</a>

	<h2>Auction Basics</h2>
	<div class="glass-flip-grid">
		<div class="glass-flip-card">
			<div class="glass-flip-inner">
				<div class="glass-front"><h3>Purchasing Outright</h3></div>
				<div class="glass-back">
					<p>
						Buy an animal for processing. Additional costs apply for cut/wrap and smoking.
						Poultry/rabbits sold in pens or singles.
					</p>
				</div>
			</div>
		</div>
		<div class="glass-flip-card">
			<div class="glass-flip-inner">
				<div class="glass-front"><h3>Splitting Purchases</h3></div>
				<div class="glass-back">
					<p>
						Multiple buyers can split an animal. Must bid as one entry and coordinate arrangements
						independently.
					</p>
				</div>
			</div>
		</div>
		<div class="glass-flip-card">
			<div class="glass-flip-inner">
				<div class="glass-front"><h3>Turning</h3></div>
				<div class="glass-back">
					<p>
						Sell the animal back to the processor at the posted turn price. Tax-deductible donation.
					</p>
				</div>
			</div>
		</div>
	</div>

	<article class="block-List">
		<h4>Online Access</h4>
		<p>
			<a href="https://kitsapjuniorlivestockauction.org" target="_blank">Visit Auction Website</a>
		</p>
		<p><a href="https://bestbidonlineauctions.com" target="_blank">Bid Online</a></p>
	</article>

	<article class="block-List">
		<h4>Available Animals</h4>
		<p>Beef, lamb, goat, pork, rabbit, chicken, duck, and turkey.</p>
	</article>

	<article class="block-List">
		<h4>How to Support</h4>
		<p>Bid on an animal (in-person or online)</p>
		<p><a href="/Extra/infoSheets">Make a donation</a></p>
		<p><a href="/Extra/infoSheets">Submit an Add-On Form by August 23</a></p>
	</article>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.btn-Ghost {
		margin-top: var(--size-8);
	}

	.glass-front {
		color: var(--bg-1);
	}
</style>
