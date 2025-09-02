<script lang="ts">
	import { goto } from '$app/navigation';

	let isMenuOpen = $state(false);
	let current = $state(0);

	// Function to navigate to a specified URL without scrolling
	function navigateTo(url: string) {
		// Validate URL to prevent open redirects
		if (url.startsWith('/') || url.startsWith('http')) {
			goto(url, { noScroll: true });
		} else {
			console.error('Invalid URL:', url);
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="navbar">
	<nav class:open={isMenuOpen}>
		<ul>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 11}
						onclick={() => {
							current = 11;
							navigateTo('/Extra');
						}}
						href="/Extra">Extra</a
					>
				</button>
			</li>

			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 10}
						onclick={() => {
							current = 10;
							navigateTo('/Submissions');
						}}
						href="/Submissions">Submissions</a
					>
				</button>
			</li>

			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 9}
						onclick={() => {
							current = 9;
							navigateTo('/Pictures');
						}}
						href="/Pictures">Pictures</a
					>
				</button>
			</li>

			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 8}
						onclick={() => {
							current = 8;
							navigateTo('/Vendors');
						}}
						href="/Vendors">Vendors</a
					>
				</button>
			</li>

			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 7}
						onclick={() => {
							current = 7;
							navigateTo('/Food');
						}}
						href="/Food">Food</a
					>
				</button>
			</li>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 6}
						onclick={() => {
							current = 6;
							navigateTo('/Auction');
						}}
						href="/Auction">Auction</a
					>
				</button>
			</li>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 5}
						onclick={() => {
							current = 5;
							navigateTo('/Carnival');
						}}
						href="/Carnival">Carnival</a
					>
				</button>
			</li>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 4}
						onclick={() => {
							current = 4;
							navigateTo('/Entertainment');
						}}
						href="/Entertainment">Entertainment</a
					>
				</button>
			</li>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 3}
						onclick={() => {
							current = 3;
							navigateTo('/Rodeo');
						}}
						href="/Rodeo">Rodeo</a
					>
				</button>
			</li>
			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 2}
						onclick={() => {
							current = 2;
							navigateTo('/Sponsors');
						}}
						href="/Sponsors">Sponsors</a
					>
				</button>
			</li>

			<li>
				<button onclick={() => (isMenuOpen = false)} onkeydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 1}
						onclick={() => {
							current = 1;
							navigateTo('/');
						}}
						href="/">Home</a
					>
				</button>
			</li>
		</ul>
	</nav>
	<button onclick={toggleMenu} onkeydown={() => (isMenuOpen = false)}>
		<div class="burger">X</div>
	</button>
</div>

<!--svelte-ignore css_unused_selector -->
<style>
	.navbar {
		background: radial-gradient(ellipse, var(--accent-2), var(--bg-2));
		background-size: 200% 200%;
		animation: gradientShift 50s ease-in-out infinite;
		width: 100vw;
		display: flex;
		position: fixed;
		top: 0;
		justify-content: space-between;
		height: var(--size-10);
		transition: var(--transit);
		border-bottom: 2px solid var(--bg-1);
		box-shadow: var(--box-Shadow);
		z-index: 950;
	}

	li[aria-current='page']::before,
	li[aria-current='page']::after {
		content: '';
		padding: var(--size-1);
		border: 3px solid var(--accent-1);
		border-radius: 50px;
	}

	.navbar button {
		all: unset;
	}

	.navbar a {
		color: var(--txt-1);
		transition: var(--transit);
	}

	.navbar a:hover,
	.navbar a:focus {
		color: var(--accent);
		text-shadow: var(--text-Shadow);

		transform: scale(1.05);
	}

	.navbar ul {
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		margin: 0;
		padding: 0;
	}

	.navbar ul li {
		padding: 3% 0;
	}

	.navbar > li {
		position: relative;
	}

	.navbar ul li button {
		all: unset;
		cursor: pointer;
	}

	.navbar .burger {
		display: flex;
		width: 100%;
		margin: 0 2vw;

		&:hover {
			cursor: pointer;
			transform: scale(0.9);
			transition: transform 0.1s ease-in-out;
		}

		& svg {
			width: var(--size-9);
			height: var(--size-9);
			background-color: var(--bg-1);
			border-radius: 50%;
		}
	}

	nav {
		display: none;
	}

	nav.open {
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		background: radial-gradient(ellipse, var(--bg-1), var(--accent-2));
		background-size: 200% 200%;
		animation: gradientShift 50s ease-in-out infinite;
		width: 100vw;
		/* border-top: 2px solid var(--accent-2); */
		border-bottom: 2px solid var(--accent-2);
		box-shadow: var(--box-Shadow);
	}

	/* Dropdown Menu Styles */
	.dropdown {
		list-style: none;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 100%;
		background-color: var(--bg-1);
		border: var(--bord);
		box-shadow: var(--box-Shadow);
		text-transform: capitalize;
	}

	.dropdown li {
		padding: 0;
	}

	.dropdown a {
		padding: var(--size-4);
		white-space: nowrap;
	}

	/* Laptop styles */
	@media only screen and (min-width: 1024px) {
		nav {
			display: flex;
		}

		.navbar {
			height: 4rem;
		}

		.navbar .burger {
			display: none;
		}

		.navbar ul {
			flex-direction: row-reverse;
			gap: var(--space-7);
			margin: 0 15vw;

			& li {
				padding: var(--size-4);
			}
		}

		.dropdown {
			position: absolute;
			top: 100%;
			left: 0;
			background-color: var(--bg-1);
			border: var(--bord);
			box-shadow: var(--box-Shadow);
			text-transform: capitalize;
		}
	}
</style>
