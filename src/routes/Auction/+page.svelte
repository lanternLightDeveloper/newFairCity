<script>
	import AuctionFace from '$lib/imgs/auctionSilhouette2.png';
</script>

<section
	class="blk-Western"
	style={`background-image: url(${AuctionFace}); background-size: cover; background-position: center;`}
>
	<h3>Kitsap Junior Livestock Auction</h3>
	<article>
		<p class="pointB">
			Advancing youth interest in agriculture and livestock management through ethics, education,
			and community support.
		</p>

		<h4>Location & Time</h4>
		<article>
			<p class="pointD">
				Where:<strong> Kitsap Fair & Stampede, 1300 NW Fairgrounds Rd, Bremerton, WA</strong>
			</p>
			<p class="pointD">When: <strong> Saturday, August 23, 2025 at 2:00pm </strong></p>
			<p class="pointB">Register online or arrive early to bid in person.</p>
		</article>
	</article>
</section>

<a href="/Extra/InfoSheets"  class="center-wrapper">
	<button class="btn-Ghost"> Download Info Sheet </button>
</a>

<div class="glass-flip-grid">
	<h2>Auction Basics</h2>
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

<section class=" grid-Western">
	<div class="blk-Western">
		<h3>Online Access</h3>
		<article>
			<p>
				<a href="https://kitsapjuniorlivestockauction.org" target="_blank">Visit Auction Website</a>
			</p>
			<p><a href="https://bestbidonlineauctions.com" target="_blank">Bid Online</a></p>
		</article>
	</div>

	<div class="blk-Western">
		<h3>Available Animals</h3>
		<article>
			<p>Beef, lamb, goat, pork, rabbit, chicken, duck, and turkey.</p>
		</article>
	</div>

	<div class="blk-Western">
		<h3>How to Support</h3>
		<article>
			<p>Bid on an animal (in-person or online)</p>
			<a href="/Extra/infoSheets">Make a donation</a>
			<a href="/Extra/infoSheets">Submit an Add-On Form by August 23</a>
		</article>
	</div>
</section>

<!--svelte-ignore css_unused_selector -->
<style>
	.glass-front {
		color: var(--bg-1);
	}

	
	.center-wrapper {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center; 
		align-items: center; 
	}

</style>
