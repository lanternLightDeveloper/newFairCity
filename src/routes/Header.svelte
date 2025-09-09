<script lang="ts">
	let isMenuOpen = $state(false);
	let current = $state(1);

	const menuItems = [
		{ label: 'Home', href: '/', id: 1, degree: 0 },
		{ label: 'Sponsors', href: '/Sponsors', id: 2, degree: 36 },
		{ label: 'Rodeo', href: '/Rodeo', id: 3, degree: 72 },
		{ label: 'Entertainment', href: '/Entertainment', id: 4, degree: 108 },
		{ label: 'Carnival', href: '/Carnival', id: 5, degree: 144 },
		{ label: 'Auction', href: '/Auction', id: 6, degree: 180 },
		{ label: 'Food', href: '/Food', id: 7, degree: 216 },
		{ label: 'Vendors', href: '/Vendors', id: 8, degree: 252 },
		{ label: 'Pictures', href: '/Pictures', id: 9, degree: 288 },
		{ label: 'Submissions', href: '/Submissions', id: 10, degree: 324 }
	];

	function navigateTo(href) {
		console.log('navigate', href);
	}

	let rotation = $derived.by(() => {
		const selected = menuItems.find((item) => item.id === current);
		return selected ? -selected.degree : 0;
	});
</script>

<div class="radial-menu">
	<button class="center-toggle" onclick={() => (isMenuOpen = !isMenuOpen)}>
		{isMenuOpen ? '✕' : '☰'}
	</button>
	<div class="position-ring" style={`transform: rotate(${rotation}deg);`}>
		{#each menuItems as item, i}
			<div
				class="menu-dot"
				style={`transform: rotate(${(360 / menuItems.length) * i}deg) translate(7rem);`}
			>
				<a
					href={item.href}
					class:current={current === item.id}
					onclick={() => {
						current = item.id;
						isMenuOpen = false;
						navigateTo(item.href);
					}}
				>
					<div class="dot-circle">
						{#if current === item.id}
							<span class="dot-label">{item.label}</span>
						{/if}
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<!--svelte-ignore css_unused_selector -->
<style>
	.radial-menu {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.center-toggle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: var(--accent-1);
		color: var(--txt-1);
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
		box-shadow: var(--shdw-Box);
	}

	.position-ring {
		position: absolute;
		top: 51%;
		left: 43%;
		/* transform: translate(-50%, -50%); */
		transition: transform 0.4s ease;
	}

	.menu-dot {
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: center;
		transition: transform 0.3s ease;
	}
	.menu-dot a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
	}
	.dot-circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--txt-1);
		border: 4px solid var(--accent-1);
		box-shadow: var(--shdw-Box);
		transition: background 0.2s ease;
	}
	.menu-dot a:hover .dot-circle {
		background: var(--hover);
		border: 2px solid var(--txt-1);
	}
	.dot-label {
		position: relative;
		background: var(--txt-1);
		padding: 0.2rem;
		border-radius: 12px;
		box-shadow: var(--shdw-Box);
		white-space: nowrap;
		opacity: 0;
		animation: fadeIn 0.3s forwards;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	a.current .dot-circle {
		background: var(--accent-1);
	}
	a.current .dot-label {
		color: var(--accent-1);
		font-weight: bold;
	}
</style>
