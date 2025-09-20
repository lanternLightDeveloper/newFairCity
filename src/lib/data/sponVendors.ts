export type Sponsor = {
	label: string;
	info: string;
};

export type Food = {
	label: string;
	info: string;
	popularItems: string;
};

export type IndoorCommercial = {
	label: string;
	info: string;
};

export type OutdoorCommercial = {
	label: string;
	info: string;
};

export const Sponsors = [
	{ label: '19th Hole Bar and Grill', info: 'Local favorite golf bar' },
	{ label: 'Admiral Theater Foundation', info: 'Historic venue supporting the arts' },
	{ label: 'Agate Asphalt', info: 'Trusted paving and asphalt experts' },
	{ label: 'Ahoy Kitsap Playland', info: 'Indoor fun zone for kids and families' },
	{ label: 'All In Septic & Excavation', info: 'Reliable septic and excavation services' },
	{ label: 'AllCounty Operations', info: 'Comprehensive property services provider' },
	{ label: 'Bagwell Law', info: 'Legal guidance with a personal touch' },
	{ label: 'Bankrock Corp', info: 'Innovative solutions for local businesses' },
	{ label: 'BJC Group Inc', info: 'Construction and development professionals' },
	{ label: 'Boot Barn', info: 'Western wear and boots for all ages' },
	{ label: 'Brothers Powersports', info: 'Motorcycle and ATV specialists' },
	{ label: 'Budget Blinds', info: 'Stylish window treatments for every home' },
	{ label: 'C B Farrier Services', info: 'Expert hoof care for horses' },
	{ label: 'C & C Development & Trucking', info: 'Heavy hauling and site development' },
	{ label: 'Camp Union Properties', info: 'Local real estate and property management' },
	{ label: 'Cascade Diesel', info: 'Diesel repair and performance tuning' },
	{ label: 'Cornerstone Cleaning', info: 'Professional cleaning with a personal touch' },
	{ label: "Dana's Heating & Cooling", info: 'Comfort solutions for every season' },
	{ label: 'Destination Harley Davidson', info: 'Your Harley destination in the Northwest' },
	{ label: 'Diane K. Golbeck, PLLC', info: 'Compassionate legal services for families' },
	{ label: 'Fife RV', info: 'RV sales and service for your next adventure' },
	{
		label: 'Geico, Silverdale Office (Kevin Krieger)',
		info: 'Local insurance with national strength'
	},
	{ label: 'Gresham Pump & Drilling', info: 'Water well and pump specialists' },
	{ label: 'Grey Miles Co', info: 'Creative branding and design solutions' },
	{ label: 'Hanley Constructions', info: 'Building Kitsap with pride and precision' },
	{ label: 'Haselwood Auto Group', info: 'Your trusted auto dealership network' },
	{ label: 'Herdman Plumbing', info: 'Expert plumbing services with hometown care' },
	{ label: 'Horsepower Machine', info: 'Precision machining for high-performance engines' },
	{ label: 'Integrity Roofing & Construction', info: 'Roofing and construction built on trust' },
	{ label: 'Jensen Realtor Group', info: 'Helping families find their perfect home' },
	{ label: 'Joyce Construction', info: 'Building Kitsap with craftsmanship and pride' },
	{ label: 'Kahn Industries', info: 'Engineering solutions for modern infrastructure' },
	{ label: 'Kitsap Credit Union', info: 'Community banking with heart and purpose' },
	{ label: 'Kitsap Golf and Country Club', info: 'Premier golf and social destination in Kitsap' },
	{ label: 'Kitsap Roof Pros', info: 'Protecting homes with expert roofing care' },
	{ label: 'Land Title', info: 'Trusted title and escrow services for real estate' },
	{ label: 'Lone Star Donuts', info: 'Texas-sized flavor in every bite' },
	{ label: 'Mathews Electric', info: 'Powering homes and businesses with precision' },
	{ label: 'Mayda Mechanical', info: 'Heating and cooling solutions for every season' },
	{ label: 'Mitchell Lumber', info: 'Supplying quality lumber for local builders' },
	{ label: 'Mountain View Plumbing', info: 'Plumbing services with a scenic touch' },
	{ label: 'Olympic Ridge', info: 'Elevated living in the heart of Kitsap' },
	{ label: 'Our Place Pub & Eatery', info: 'Where good food and good company meet' },
	{ label: 'PacWest Motocross', info: 'Thrilling motocross action for all ages' },
	{ label: 'Pendleton Whiskey', info: 'Smooth whiskey crafted for the bold' },
	{
		label: 'Peninsula Community Health Services',
		info: 'Accessible healthcare for every neighbor'
	},
	{ label: 'Pickett Property Management', info: 'Professional care for your rental investments' },
	{ label: 'PSE', info: 'Powering the Pacific Northwest with clean energy' },
	{ label: 'Puget Fence', info: 'Fencing solutions that protect and beautify' },
	{ label: 'Rebecca Gore/Windemere', info: 'Local real estate expertise with a personal touch' },
	{ label: 'Robison Plumbing', info: 'Dependable plumbing from a trusted name' },
	{ label: 'Sandi Johnson - Realtor', info: 'Helping you find home, one key at a time' },
	{ label: 'Sherlock Equipment', info: 'Heavy equipment rentals with precision and power' },
	{ label: 'Sound Pest Control', info: 'Keeping homes safe from unwanted guests' },
	{ label: 'Stokes Auction', info: 'Auctioneering with heart and heritage' },
	{ label: 'Suquamish Clearwater Casino', info: 'Gaming, dining, and entertainment by the bay' },
	{ label: 'Talbot Excavating', info: 'Digging deep for your construction needs' },
	{ label: "Tim's Home Medical Supplies", info: 'Caring solutions for independent living' },
	{ label: 'Tracyton Public House', info: 'Neighborhood pub with local flavor' },
	{ label: 'Umpqua Bank', info: 'Banking that puts people first' },
	{ label: 'Viking Fence', info: 'Strong fences with Scandinavian grit' },
	{ label: 'Virginia Mason Franciscan Health', info: 'Compassionate care for every stage of life' },
	{ label: 'Westbay Auto Parts', info: 'Your local source for quality auto parts' },
	{ label: 'Whitworth Excavating', info: 'Excavation services with precision and pride' },
	{ label: 'Wilco', info: 'Farm, home, and garden supplies for every need' }
];

export const Fooders = [
	{
		label: 'Bean Water',
		info: 'Espresso, lemonade, hot chocolate',
		popularItems: 'Dark Chocolate Mocha: $7, Chai Latte: $9, Matcha Fizz: $6'
	},
	{
		label: 'Belfair Pop',
		info: 'Kettle corn, cotton candy, treats, lemonade',
		popularItems: 'Sweet & Salty Kettle Corn: $5, Rainbow Cotton Candy: $4, Strawberry Lemonade: $6'
	},
	{
		label: "Big Joe's Sandwich Shop",
		info: 'Sandwiches, fries, soda',
		popularItems: 'Philly Cheesesteak: $10, Garlic Fries: $6, Classic Cola: $3'
	},
	{
		label: 'Carlson Catering Fry Shop',
		info: 'Burgers, hot dogs, Philly cheese, cheese sandwiches, chicken strips, fries, elephant ears, lemonade, water',
		popularItems: 'Loaded Cheeseburger: $9, Elephant Ear Supreme: $8, Chicken Strip Basket: $10'
	},
	{
		label: 'Carlson Catering Snowie',
		info: 'Shaved ice and lemonade',
		popularItems: 'Tiger’s Blood Snowie: $5, Mango Chill: $4, Lemonade Splash: $3'
	},
	{
		label: 'Character Cotton Candy',
		info: 'Character cotton candy, fruit kiss drinks',
		popularItems: 'Unicorn Cotton Candy: $6, Pikachu Punch: $5, Mermaid Swirl: $6'
	},
	{
		label: "Crazy Eric's",
		info: 'Burgers, corn dogs, fries, soda, snacks',
		popularItems: 'Bigfoot Burger Deluxe: $9, Fair Burger: $7, Curly Fries: $5'
	},
	{
		label: 'Creativitin',
		info: 'Cheesecake on a stick',
		popularItems:
			'Strawberry Cheesecake Stick: $6, Chocolate Dipped Cheesecake: $7, Caramel Crunch Cheesecake: $6'
	},
	{
		label: "Domino's Pizza",
		info: 'Pizza and soda',
		popularItems: 'Pepperoni Slice: $4, Cheese Slice: $3.50, Garlic Bread Bites: $5'
	},
	{
		label: 'Fast & Fresh Foods',
		info: 'Korean corn dogs, gyros, chicken fritters, fries, water, soda',
		popularItems: 'Mozzarella Korean Dog: $7, Chicken Fritter Basket: $8, Lamb Gyro Wrap: $9'
	},
	{
		label: 'Fisher Fair Scones',
		info: 'Scones',
		popularItems: 'Classic Raspberry Scone: $4, Cinnamon Sugar Scone: $4, Lemon Glaze Scone: $5'
	},
	{
		label: "Fridley's Ice Cream",
		info: 'Flavor Burst ice cream',
		popularItems: 'Vanilla Rainbow Swirl: $5, Chocolate Burst Cone: $4.50, Strawberry Sundae: $6'
	},
	{
		label: 'Funnel of Love',
		info: 'Funnel cakes, elephant ears, deep fried treats',
		popularItems: 'Powdered Sugar Funnel Cake: $7, Deep Fried Oreos: $6, Cinnamon Elephant Ear: $8'
	},
	{
		label: 'G&M Lemon Shake Ups',
		info: 'Lemonade, lotus lemonade, iced tea',
		popularItems: 'Classic Shake Up: $5, Blue Lotus Lemonade: $6, Peach Iced Tea: $4'
	},
	{
		label: 'Iced Up',
		info: 'Asian gourmet ice',
		popularItems: 'Lychee Ice Bowl: $6, Mango Tango Ice: $7, Green Tea Snow: $6'
	},
	{
		label: 'International Fair Foods',
		info: 'Greek food, gyros, salads, drinks',
		popularItems: 'Chicken Gyro: $9, Greek Salad Bowl: $8, Baklava Bites: $5'
	},
	{
		label: 'Island Lumpia',
		info: 'Assorted lumpia flavors',
		popularItems: 'Pork Lumpia Roll: $6, Veggie Lumpia: $5, Sweet Chili Lumpia: $6'
	},
	{
		label: "Kama'aina Grill",
		info: 'Hawaiian food',
		popularItems: 'Kalua Pork Plate: $10, Spam Musubi: $4, Pineapple Slaw: $5'
	},
	{
		label: 'Kona Ice',
		info: 'Shaved ice treats',
		popularItems: 'Blue Raspberry Kona: $5, Watermelon Wave: $4, Tropical Rainbow: $6'
	},
	{
		label: 'LaChurrreria J&JJ',
		info: '(Menu not listed)',
		popularItems: 'Classic Cinnamon Churro: $4, Chocolate Dipped Churro: $5, Churro Sundae: $6'
	},
	{
		label: 'Pinoy Kitchen',
		info: 'Filipino food',
		popularItems: 'Chicken Adobo Bowl: $9, Pork BBQ Skewers: $7, Halo-Halo Dessert: $6'
	},
	{
		label: "Ramblin' Gourmet",
		info: 'Burgers, corn dogs, fries, coffee, soda',
		popularItems: 'Ramblin’ Bacon Burger: $9, Hand-Dipped Corn Dog: $6, Crinkle Fries: $4'
	},
	{
		label: "Smokin' Robinson",
		info: 'St Louis style BBQ',
		popularItems: 'Pulled Pork Sandwich: $10, BBQ Ribs Plate: $12, Smoked Mac & Cheese: $6'
	},
	{
		label: 'Southern Oregon Concessions',
		info: 'Burgers, fries, corn dogs, soda, water',
		popularItems: 'Double Cheeseburger: $8, Classic Corn Dog: $5, Seasoned Fries: $4'
	},
	{
		label: 'Squatch Snacks',
		info: 'Roasted corn, loaded baked potatoes, soda',
		popularItems: 'Butter Roasted Corn: $4, Bacon Cheddar Potato: $7, Sasquatch Soda: $3'
	},
	{
		label: 'Sugar & Spice Mini Donuts',
		info: 'Mini donuts, cheese curds, tater tots, pineapple soft serve, hand-dipped corndogs, pretzels, coffee, lemonade, water',
		popularItems: 'Cinnamon Mini Donuts: $5, Pineapple Soft Serve: $6, Cheese Curds Basket: $7'
	},
	{
		label: 'Taqueria el Campesino',
		info: 'Tacos, tortas, tamales, fruit, elotes, beverages',
		popularItems: 'Street Tacos Trio: $8, Elote Cup: $5, Chicken Tamale: $6'
	},
	{
		label: 'Viking Feast Ice Cream',
		info: 'Ice cream treats',
		popularItems: 'Viking Vanilla Cone: $4, Chocolate Shield Sundae: $6, Berry Battle Swirl: $5'
	},
	{
		label: 'Western Red Brewery',
		info: 'Beer garden',
		popularItems: 'Red Ale Pint: $7, IPA Flight: $9, Summer Lager: $6'
	}
];

export const IndoorCommercial = [
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

export const OutdoorCommercial = [
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
