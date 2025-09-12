export type BarnDay = {
	day: string;
	events: string[];
};

export type Artist = {
	name: string;
	genre: string;
	teaser: string;
	website: string;
	video: string;
	description: string;
};

export type EventDay = {
	day: string;
	sponsor: string;
	events: string[];
};

export const Schedule = [
	{
		day: 'Wednesday, Aug. 20, 2025',
		sponsor: 'Opening at the Fair proudly sponsored by Joyce Construction.',
		events: [
			'10:00am - Fair Opens',
			'10:00am - Livestock Show',
			'11:00am - Carnival Opens',
			'11:00am - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'11:50am - National Anthem by Afton Prater on the Main Stage',
			'12:00pm - Afton Prater on the Main Stage',
			'1:00pm - Contests/Interviews by Cris Larsen on the Main Stage',
			'1:00pm - K-9 Presentation Behind the Presidents Hall',
			'2:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'3:00pm - Ava X Jade on the Main Stage',
			'3:00pm - K-9 Presentation Behind the Presidents Hall',
			'4:00pm - Tom McHugh on the Thunder Road Stage',
			'4:30pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'5:30pm - K-9 Presentation Behind the Presidents Hall',
			'5:30pm - Joey Dean on the Thunder Road Stage',
			'6:00pm - Liquidhorse on the Main Stage',
			'6:30pm - Rodeo in the Thunderbird Arena *',
			'7:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'8:00pm - Liquid Horse on the Main Stage',
			'9:00pm - Dakota Poorman on the Thunder Road Stage (21+ only inside venue)'
		]
	},
	{
		day: 'Thursday, Aug. 21, 2025',
		sponsor: 'Military Day proudly sponsored by Geico Local.',
		events: [
			'9:00am - Slack Rodeo in the Thunderbird Arena',
			'10:00am - Fair Opens',
			'10:00am - Livestock Show',
			'11:00am - Carnival Opens',
			'11:00am - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'12:00pm - Magic by Kevin Wolfe on the Main Stage',
			'12:00pm - Motorcycle Demonstration next to the Pavilion',
			'1:00pm - Contests/Interviews by Cris Larson on the Main Stage',
			'1:00pm - K-9 Presentation Behind the Presidents Hall',
			'2:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'2:00pm - Motorcycle Demonstration next to the Pavilion',
			'3:00pm - K-9 Presentation Behind the Presidents Hall',
			'3:00pm - Mark Lewis Quartet on the Main Stage',
			'4:00pm - Tom McHugh on the Thunder Road Stage',
			'4:00pm - Motorcycle Demonstration next to the Pavilion',
			'4:30pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'5:30pm - K-9 Presentation Behind the Presidents Hall',
			'5:30pm - Joey Dean on the Thunder Road Stage',
			'6:00pm - Hypnotism by Kevin Wolfe on the Main Stage',
			'6:00pm - Motorcycle Demonstration next to the Pavilion',
			'6:30pm - Rodeo in the Thunderbird Arena *',
			'7:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'8:30pm - XLR8 on the Main Stage',
			'9:00pm - Fire & Water on the Thunder Road Stage (21+ only inside venue)'
		]
	},
	{
		day: 'Friday, Aug. 22, 2025',
		sponsor: 'Day at the Fair proudly sponsored by Kitsap Credit Union.',
		events: [
			'9:00am - Slack Rodeo in the Thunderbird Arena',
			'10:00am - Fair Opens',
			'10:00am - Livestock Show',
			'11:00am - Carnival Opens',
			'11:00am - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'11:50am - National Anthem by Afton Prater on the Main Stage',
			'12:00pm - Magic by Kevin Wolfe on the Main Stage',
			'12:15pm - Motorcycle Demonstration next to the Pavilion',
			'1:00pm - Contests/Interviews by Cris Larson on the Main Stage',
			'1:00pm - K-9 Presentation Behind the Presidents Hall',
			'2:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'2:00pm - Motorcycle Demonstration next to the Pavilion',
			'3:00pm - Hook Me Up Band on the Main Stage',
			'3:00pm - K-9 Presentation Behind the Presidents Hall',
			'4:00pm - Tom McHugh on the Thunder Road Stage',
			'4:00pm - Motorcycle Demonstration next to the Pavilion',
			'4:30pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'5:00pm - WestSound Youth Jazz on the Community Stage',
			'5:30pm - K-9 Presentation Behind the Presidents Hall',
			'5:30pm - Joey Dean on the Thunder Road Stage',
			'6:00pm - Hypnotism by Kevin Wolfe on the Main Stage',
			'6:00pm - Motorcycle Demonstration next to the Pavilion',
			'6:30pm - Rodeo in the Thunderbird Arena *',
			'7:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'8:00pm - The Infinity Project on the Main Stage',
			'9:00pm - The Bootlegs on the Thunder Road Stage (21+ years and up only inside venue)'
		]
	},
	{
		day: 'Saturday, Aug. 23, 2025',
		sponsor: 'Kids Day at the Fair – Kids 12 and under come to the Fair free!',
		events: [
			'10:00am - Fair Opens',
			'10:00am - Livestock Show',
			'11:00am - Carnival Opens',
			'11:00am - Rodeo in the Thunderbird Arena *',
			'11:00am - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'11:00pm - Herndon Brothers on the Community Stage',
			'11:00am - Magic by Kevin Wolfe on the Community Stage',
			'12:00pm - Dancing Horses in the Boand Arena',
			'12:15pm - Motorcycle Demonstration next to the Pavilion',
			'1:00pm - K-9 Presentation Behind the Presidents Hall',
			'1:00pm - Pie Judging in the Presidents hall',
			'1:30pm - Herndon Brothers on the Thunder Road Stage',
			'2:00pm - Kitsap Junior Livestock Auction at the Swing Ring (behind the horses)',
			'2:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'2:00pm - Motorcycle Demonstration next to the Pavilion',
			'3:00pm - K-9 Presentation Behind the Presidents Hall',
			'3:00pm - Magic by Kevin Wolfe on the Community Stage',
			'4:00pm - Motorcycle Demonstration next to the Pavilion',
			'4:30pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'5:00pm - West Sound Youth Jazz Band on the Community Stage',
			'5:30pm - K-9 Presentation Behind the Presidents Hall',
			'6:00pm - Dancing Horses in the Boand Arena',
			'6:00pm - Motorcycle Demonstration next to the Pavilion',
			'7:00pm - Thompson Square on the Main Stage'
		]
	},
	{
		day: 'Sunday, Aug. 24, 2025',
		sponsor: 'SENIORS DAY! - Seniors FREE fair admission all day sponsored by Kitsap Credit Union.',
		events: [
			'10:00am - Fair Opens',
			'11:00am - Carnival Opens',
			'11:00am - Xtreme Bulls in the Thunderbird Arena *',
			'11:00am - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'11:50am - National Anthem by Sweet Justice on the Main Stage',
			'12:00pm - Sweet Justice on the Main Stage',
			'12:15pm - Motorcycle Demonstration next to the Pavilion',
			'12:30pm - Dancing Horses in the Boand Arena',
			'1:00pm - Contests/Interviews by Cris Larson on the Main Stage',
			'1:00pm - K-9 Presentation Behind the Presidents Hall',
			'1:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'1:30pm - Herndon Brothers on the Thunder Road Stage (21+ years and up only inside venue)',
			'2:00pm - Motorcycle Demonstration next to the Pavilion',
			'3:00pm - K-9 Presentation Behind the Presidents Hall',
			'3:00pm - Wenatchee Youth Circus between the VanZee Building and the Presidents Hall',
			'4:00pm - Sweet Justice on the Main Stage',
			'4:00pm - Motorcycle Demonstration next to the Pavilion',
			'4:00pm - Dancing Horses in the Boand Arena'
		]
	}
];

export const BarnSchedule = [
	{
		day: 'Wednesday, Aug. 20',
		events: [
			'10:00am - Cavy Show',
			'10:00am - Poultry Type Show',
			'10:00am - Equine Showmanship',
			'10:00am - Llama Show',
			'10:00am - Miniature Horse Showmanship',
			'11:00am - Goat Show',
			'1:00pm - Dog Showmanship',
			'1:00pm - Poultry Showmanship'
		]
	},
	{
		day: 'Thursday, Aug. 21',
		events: [
			'10:00am - Swine Show',
			'10:00am - Rabbit Show',
			'10:00am - Equine Dressage',
			'11:00am - Cat Showmanship',
			'11:00am - Miniature Ground Poles & Jumping',
			'1:00pm - Dog Obedience',
			'2:00pm - Cat Type Judging',
			'4:00pm - Livestock Skill-a-thon Contest'
		]
	},
	{
		day: 'Friday, Aug. 22',
		events: [
			'10:00am - Beef & Dairy Show',
			'10:00am - Rabbit Showmanship',
			'10:00am - Sheep Show',
			'10:00am - Equine Trail',
			'1:00pm - Dog Rally',
			'2:00pm - Cat Agility',
			'3:00pm - (Sheep) Wool Show',
			'3:00pm - Miniature Horse Driving',
			'4:00pm - Livestock Judging Contest'
		]
	},
	{
		day: 'Saturday, Aug. 23',
		events: [
			'10:00am - Cavy Cloverbuds',
			'10:00am - Miniature Horse Trail & Obstacles',
			'10:00am - Cat Groom Squad',
			'10:00am - Equine Groom Squad',
			'1:00pm - Dog Agility Demo',
			'2:00pm - Kitsap Jr. Livestock Auction (Bid online at www.bestbidonlineauctions.com)',
			'4:00pm - Miniature Horse Costume Contest',
			'6:30pm - Washington Dancing Horses (Boand Arena)'
		]
	},
	{
		day: 'Sunday, Aug. 24',
		events: [
			'10:00am - Small Animal Round Robin',
			'10:00am - Cavy Costume Contest',
			'10:00am - Equine Costume Contest',
			'10:00am - Cattle Costume Contest',
			'11:00am - Goat Games',
			'11:00am - Miniature Horse Games',
			'1:00pm - Large Animal Round Robin',
			'1:00pm - Rabbit Costume Contest',
			'2:00pm - Poultry Costume Contest',
			'2:00pm - Equine Gaming'
		]
	}
];

export const Artists = [
	{
		name: 'Afton Prater',
		genre: 'Country Mix',
		teaser: 'Award-winning songwriter blending Miranda Lambert and Taylor Swift energy.',
		website: 'https://aftonprater.com',
		video: 'https://youtube.com/aftonprater',
		description:
			'Afton’s music is a mix of light-hearted fun, emotional depth, and “kick-ass” country. She’s won several awards and is quickly rising in the scene.'
	},
	{
		name: 'Ava X Jade',
		genre: 'Country Mix',
		teaser: 'Nu jazz & neo-soul meets fashion and wellness in immersive performances.',
		website: 'https://avaxjade.com',
		video: 'https://youtube.com/avaxjade',
		description:
			'Led by Angela Moorer, AVA X is a music, media, fashion, and wellness brand. Their projects INDIGO, BLUE, and JADE blend sound and experience.'
	},
	{
		name: 'The Bootlegs',
		genre: '70s & 80s Mix',
		teaser: 'A tribute to underground bootleg tapes—raw, nostalgic, and unapologetically live.',
		website: '',
		video: '',
		description:
			'The Bootlegs channel the spirit of live recordings from the 70s and 80s, delivering gritty, authentic performances that feel like a time capsule.'
	},
	{
		name: 'Dakota Poorman',
		genre: 'Country',
		teaser: '“Red, White and Blue Collar” country—raw rock infused with fiddle and banjo.',
		website: 'https://dakotapoorman.com',
		video: 'https://youtube.com/dakotapoorman',
		description:
			'Dakota brings a fresh edge to the country scene with fiery fiddle, badass banjo, and rock ’n’ roll grit.'
	},
	{
		name: 'Fire & Water',
		genre: 'Irish',
		teaser: 'Multi-instrumental trio with acoustic guitars, saxophone, and rich harmonies.',
		website: 'https://fireandwater.ie',
		video: 'https://youtube.com/fireandwater',
		description:
			'Chart-toppers in Ireland, Fire & Water blend genres with 3 unique voices and a signature sound. Their 2019 release “On Pana” hit #1.'
	},
	{
		name: 'Herndon Brothers',
		genre: 'Country',
		teaser: 'House band for Scottsdale’s Handlebar J—swing, line dance, and toe-tapping tunes.',
		website: '',
		video: 'https://youtube.com/herndonbrothers',
		description:
			'Whether you want to swing, line dance, or just tap your toes, this is the act not to miss.'
	},
	{
		name: 'Hook Me Up',
		genre: 'Jazz / Swing / Blues',
		teaser: 'Genre-hopping quartet led by trumpeter Tracey D. Hooker—since 2005.',
		website: 'https://hookmeupband.com',
		video: 'https://youtube.com/hookmeupband',
		description:
			'Western Washington staple for pop, rock, jazz, Latin, and blues. Expect good tunes and good times.'
	}
];
