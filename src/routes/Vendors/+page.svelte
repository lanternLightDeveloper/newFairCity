<script lang="ts">
	let open = $state(null);

	let items = [
		{ label: 'All State Star Agency', info: 'Auto, home and property insurance' },
		{
			label: 'AMSOIL Products',
			info: 'Vehicle engine oil, gear oil, oil filters, automotive lubrication and care products'
		},
		{
			label: 'Arco Iris',
			info: 'Hairclips, sunglasses, backpack toys, jewelry, fidget toys, dolls, ponchos, sweaters, Seahawks items, handbags, sand animals'
		},
		{ label: 'Author Event Network', info: 'Author signed edition books' },
		{ label: 'Bath Fitter', info: 'Bath and shower displays' },
		{ label: 'Bremerton Church of Christ', info: 'Religious Information' },
		{ label: 'Bremerton Elks', info: 'Club information' },
		{ label: 'Cabrera Construction Inc', info: 'Contractor, home improvement' },
		{
			label: 'Campfire Foods NW',
			info: '30-second Salsa, 30-minute chili, bloody mary mix, Killian Korn caramel corn'
		},
		{ label: 'Champion Windows', info: 'Windows, doors, siding, sunrooms' },
		{ label: 'Color Street', info: 'Nail polish strips' },
		{ label: 'Core Built Construction', info: 'General construction services' },
		{ label: 'Cup Candle Co', info: 'Candles' },
		{ label: 'Cutco Cutlery', info: 'Cutlery, household products' },
		{ label: 'Desert Gems', info: 'Minerals, fossils' },
		{
			label: 'Dos Casa Thrift',
			info: 'Vintage clothing, collectables, jewelry, pins, purses, books, vintage toys'
		},
		{ label: 'EcoView Windows & Doors NW', info: 'Residential window and door replacement' },
		{ label: 'Evergreen Softub & Sauna', info: 'Softubs' },
		{
			label: 'Flying Bagel Counseling Services',
			info: 'Therapy and parent coaching services for families'
		},
		{ label: 'Fuchsia Shoes', info: "Women's footwear, slippers, flats, loafers, sandals" },
		{ label: 'Fun Concepts', info: '3D printed toys, decor, fidgets' },
		{ label: 'Gary Hintz Woodworking', info: 'Live-edge wood furniture' },
		{ label: "Gideon's International", info: 'Pocket-size New Testament bibles' },
		{ label: 'Harley Exteriors', info: 'Windows, gutter protection, entry doors' },
		{
			label: 'Harriet Walton/Lilla Rose Hair Accessories',
			info: 'Hair accessories, handmade scarves and jackets, bags, puzzles'
		},
		{ label: 'Haselwood Auto Group', info: 'Automotive information' },
		{ label: 'Ibex Roof', info: 'Roofing, gutters, attics, and insulation' },
		{
			label: 'Jacuzzi Bath Remodel of Seattle',
			info: 'Design consultations for bath and shower remodels'
		},
		{ label: 'John L Scott Realty', info: 'Realty sales' },
		{ label: 'Jordan Essential', info: 'Magnesium lotion, sticks, sprays, natural skincare' },
		{ label: 'Kitchen Craft', info: 'Stainless steel cookware and bakeware' },
		{ label: 'Kitsap Community Resources', info: 'Information on housing and energy assistance' },
		{ label: 'Kitsap County Aging and Senior Lounge', info: '' },
		{
			label: 'Kitsap County Auditors, Elections',
			info: 'Voter registration, election information'
		},
		{ label: 'Kitsap County Democrats', info: 'Political information' },
		{ label: 'Kitsap County Republican Party', info: 'Political information' },
		{ label: 'Kitsap County Treasurer', info: 'Property taxes' },
		{ label: 'Kitsap Credit Union', info: 'Banking services' },
		{ label: 'Kitsap Great Escape', info: 'Mini escape rooms' },
		{
			label: 'Kitsap Literary Artists & Writers',
			info: 'Books, artwork and film by local writers and artists'
		},
		{ label: 'Kitsap Poggie Club', info: 'Fishing club that promotes conversation and education' },
		{ label: 'Kitsap Transit', info: 'Local transportation information' },
		{ label: 'Leaf Filter NW', info: 'Gutter protection systems' },
		{ label: 'Leafguard of Seattle', info: 'Seamless one-piece gutter system information' },
		{ label: "Lowe's", info: 'Home improvement and products' },
		{ label: 'Mary Kay Cosmetics', info: 'Makeup, skin care products' },
		{ label: 'Medicare Exchange', info: 'Insurance brokerage services' },
		{ label: 'NW Cosmetics LLC', info: 'Cosmetics, beauty products' },
		{
			label: 'Oh La La Botique',
			info: 'Candles, soaps, melts, sugar scrubs, body wash, diamond art, necklaces, wallets, purses'
		},
		{ label: 'Olympic College', info: 'Higher education information' },
		{ label: 'Our Lady Star of the Sea', info: 'Religious information' },
		{
			label: "Palmer's Workshop",
			info: 'Wood turned bottle stoppers, cribbage boards, bottle openers, pepper mills'
		},
		{ label: 'PaperPie, Books Made to Share', info: 'Educational fun books, toys, puzzles' },
		{ label: 'Paws of Bremerton', info: 'Informational education' },
		{ label: 'Peninsula Fruit Club', info: 'Club information' },
		{ label: 'Poulsbo Lions Club', info: 'Free vision screening, club information' },
		{ label: 'Primerica Financial Service', info: 'Insurance and investment information' },
		{ label: 'Pure Water Northwest', info: 'Water treatment information' },
		{ label: 'Renewal by Anderson', info: 'Residential window and door replacement services' },
		{
			label: 'Scentsy',
			info: 'Wax, car scents, oils, buddies, warmers, diffusers, pods, scent paks, cleaners, laundry'
		},
		{
			label: 'Smith Brothers Farm',
			info: 'Home delivery services of farm-fresh milk and locally inspired specialties from NW artisans'
		},
		{ label: 'Sprague Mechanical', info: 'Heating and cooling services' },
		{ label: 'System Pavers', info: 'Pavers, turf, outdoor living products' },
		{ label: 'Timbos Licorice Ropes', info: 'Licorice rope candy' },
		{ label: 'Town & Country PermaBilt', info: 'Pole buildings' },
		{
			label: 'Trim Light Kitsap',
			info: 'Permanent holiday lighting, residential electrical services'
		},
		{ label: 'TriState Roofing', info: 'Roofing, siding, gutters, windows, doors, patio covers' },
		{ label: 'Tupperware', info: 'Tupperware household products' },
		{
			label: 'Unique Experience Custom Embroidery',
			info: 'Services display for custom embroidery'
		},
		{ label: 'US Jaclean', info: 'Daiwa massage chairs, Samurai hand massager' },
		{ label: 'US Marine Corp', info: 'Military Information' },
		{ label: 'Veterans of Foreign War Bremerton Post 239', info: 'Club information' },
		{ label: 'VMFH Hospice', info: 'Hospice services and information' },
		{ label: 'Washington/Idaho Narcotics Anonymous', info: 'Information' },
		{
			label: 'Water Purveyors Assn. of Kitsap County',
			info: 'Drinking Water materials and education'
		},
		{ label: 'We Know Medicare', info: 'Medicare insurance resource center' },
		{ label: 'Western Washington Alcohol Anonymous', info: '' },
		{ label: 'Window Nation', info: 'Energy efficient windows' }
	];

	let outsideItems = [
		{ label: "America's New Deal", info: 'Disney toys' },
		{ label: "Ashley's Whatsits", info: 'Handmade jewelry, crystals, crocheted items' },
		{ label: 'Ax Kickers WA', info: 'Ax throwing' },
		{ label: 'Beyond Reality', info: 'Virtual reality games and activities' },
		{ label: 'Brigid Trading Co', info: 'Celtic inspired lotions and soaps' },
		{ label: 'Child Evangelism Fellowship', info: 'Religious information, child activities' },
		{
			label: 'Cole & Co Permanent Jewelry',
			info: 'Permanent jewelry (bracelets, anklets, necklaces, rings)'
		},
		{ label: 'Drawn Together Caricature', info: 'Live caricature art' },
		{ label: 'Frida Haas Studios', info: 'Face painting' },
		{ label: 'Fun 4 a Day', info: 'Rockewall, power jump' },
		{ label: 'Henna Reflections', info: 'Henna temporary tattoos & eyebrow threading' },
		{
			label: 'Kakadu Traders Australia',
			info: 'Canvas coats, various clothing, wallets, belts, hats'
		},
		{ label: "Kitsap County Sherriff's Dept.", info: 'Security services & information' }
	];
</script>

<h1>Vendors</h1>

<p>THE LISTING BELOW IS IN ALPHABETICAL ORDER, AND DOES NOT INDICATE BOOTH PLACEMENT.</p>

<section class="glass-flip-grid">
	<h2>Outdoor</h2>
	{#each outsideItems as item, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Details for ${item.label}`}
			onmouseenter={() => (open = i)}
			onmouseleave={() => (open = null)}
			onfocus={() => (open = i)}
			onblur={() => (open = null)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					open = i;
					e.preventDefault();
				}
			}}
		>
			<div class="glass-flip-inner" aria-hidden={open !== i}>
				<div class="glass-front">
					<h3>{item.label}</h3>
				</div>
				<div class="glass-back">
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}

	<h2>Inside</h2>
	{#each items as item, i}
		<div
			class="glass-flip-card"
			tabindex="0"
			role="button"
			aria-label={`Details for ${item.label}`}
			onmouseenter={() => (open = i)}
			onmouseleave={() => (open = null)}
			onfocus={() => (open = i)}
			onblur={() => (open = null)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					open = i;
					e.preventDefault();
				}
			}}
		>
			<div class="glass-flip-inner" aria-hidden={open !== i}>
				<div class="glass-front">
					<h3>{item.label}</h3>
				</div>
				<div class="glass-back">
					<p>{item.info}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
