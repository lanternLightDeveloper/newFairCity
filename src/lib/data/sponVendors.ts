export type Sponsor = {
	label: string;
	info: string;
};

export type Food = {
	label: string;
	info: string;
	popularItems: string;
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
	{ label: 'Haselwood Auto Group', info: 'Your trusted auto dealership network' }
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
