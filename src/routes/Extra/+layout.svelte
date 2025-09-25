<script lang="ts">
	let { children } = $props();
</script>

<h1>Contacts & Guides</h1>
<nav class="entertainment-nav">
	<a href="/Extra/Contact">Contact</a>
	<a href="/Extra/Exhibitor">Exhibitor Guides</a>
	<a href="/Extra/SponsorGuide">Sponsor Guides</a>
	<a href="/Extra/VendorGuide">Vendor Guides</a>
</nav>

<main>
	{@render children()}
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.entertainment-nav {
		display: flex;
		justify-content: center;
		gap: var(--size-8);
	}

	a {
		color: var(--accent-1);
		border-bottom: var(--bord);
		font-weight: 500;

		& img {
			width: var(--size-10);
			background-color: var(--hallow-2);
		}

		&:hover {
			background-color: var(--hover);
			border-bottom: var(--bord-2);

			& img {
				background-color: var(--hallow-1);
			}
		}
	}
</style>
