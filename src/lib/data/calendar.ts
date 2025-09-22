export type Event = {
	date: string;
	title: string;
	description: string;
	location: string;
	time: string;
	explanation: string;
	img: string;
	link: string;
};

import imgRodeo from '$lib/imgs/rodeo.jpg';

export const Events = [
	{
		date: '2025-09-26',
		title: 'Meeting with Team',
		description: 'Discuss project milestones',
		location: 'Conference Room A',
		time: '10:00 AM',
		explanaition: 'A detailed meeting to discuss the upcoming project milestones and deliverables.',
		img: imgRodeo,
		link: 'https://example.com/meeting'
	},
	{
		date: '2025-09-27',
		title: 'Project Deadline',
		description: 'Final deadline for project submissions',
		location: 'Online',
		time: '5:00 PM',
		explanation: 'All project submissions must be in by this date.',
		img: imgRodeo,
		link: 'https://example.com/deadline'
	},
	{
		date: '2025-09-28',
		title: 'Independence Day',
		description: 'Celebration of independence',
		location: 'City Hall',
		time: '12:00 PM',
		explanation: 'A public holiday to celebrate independence.',
		img: imgRodeo,
		link: 'https://example.com/independence'
	}
];
