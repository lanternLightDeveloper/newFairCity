<script>
	import { onMount } from 'svelte';
	import { Events } from '$lib/data/calendar';

	let today = new Date();
	let currentYear = $state(today.getFullYear());
	let currentMonth = $state(today.getMonth());
	let currentDay = $state(today.getDate());

	let selectedDate = $state(null);

	let days = $state();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	function generateCalendar(year, month) {
		days = [];
		const firstDay = new Date(year, month, 1).getDay();
		const totalDays = new Date(year, month + 1, 0).getDate();

		// Fill in blank days before the first of the month
		for (let i = 0; i < firstDay; i++) {
			days.push(null);
		}

		// Fill in actual days
		for (let i = 1; i <= totalDays; i++) {
			days.push(i);
		}
	}

	function nextMonth() {
		if (currentMonth === 11) {
			currentMonth = 0;
			currentYear++;
		} else {
			currentMonth++;
		}
		generateCalendar(currentYear, currentMonth);
	}

	function prevMonth() {
		if (currentMonth === 0) {
			currentMonth = 11;
			currentYear--;
		} else {
			currentMonth--;
		}
		generateCalendar(currentYear, currentMonth);
	}

	onMount(() => {
		generateCalendar(currentYear, currentMonth);
	});

	function selectDay(day) {
		const month = String(currentMonth + 1).padStart(2, '0');
		const date = String(day).padStart(2, '0');
		selectedDate = `${currentYear}-${month}-${date}`;
	}

	let filteredEvents = $state([]);

	$effect(() => {
		filteredEvents = Events.filter((e) => e.date === selectedDate);
	});

	let eventDates = $state(new Set());

	$effect(() => {
		eventDates = new Set(Events.map((e) => e.date));
	});

	let monthlyEvents = $state([]);

	$effect(() => {
		monthlyEvents = Events.filter((e) => {
			const d = new Date(e.date);
			return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
		});
	});
</script>

<div class="calendar">
	<div class="header">
		<button onclick={prevMonth}>◀</button>
		<strong>{monthNames[currentMonth]} {currentYear}</strong>
		<button onclick={nextMonth}>▶</button>
	</div>

	<div class="grid">
		<div class="day">Sun</div>
		<div class="day">Mon</div>
		<div class="day">Tue</div>
		<div class="day">Wed</div>
		<div class="day">Thu</div>
		<div class="day">Fri</div>
		<div class="day">Sat</div>

		{#each days as day}
			<button
				class="day
      {day === null ? 'blank' : ''} 
      {day === currentDay &&
				currentMonth === today.getMonth() &&
				currentYear === today.getFullYear()
					? 'today'
					: ''} 
      {day !== null &&
				eventDates.has(
					`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
				)
					? 'has-event'
					: ''} 
      {selectedDate ===
				`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
					? 'selected'
					: ''}"
				onclick={() => day && selectDay(day)}
			>
				{day}
			</button>
		{/each}
	</div>
</div>

{#if selectedDate && filteredEvents.length > 0}
	<div class="events">
		<h3>Events on {selectedDate}</h3>
		{#each filteredEvents as event}
			<div class="event-card">
				<h4>{event.title}</h4>
				<p><strong>Time:</strong> {event.time}</p>
				<p><strong>Location:</strong> {event.location}</p>
				<p>{event.description}</p>
				<p>{event.explanation}</p>
				<img src={` ${event.img}`} alt={event.title} />
				<a href={event.link} target="_blank">More Info</a>
			</div>
		{/each}
	</div>
{:else if selectedDate}
	<p>No events on {selectedDate}</p>
{:else if monthlyEvents.length > 0}
	<div class="events">
		<h1>Events in {monthNames[currentMonth]} {currentYear}</h1>
		{#each monthlyEvents as event}
			<h2>{event.title}</h2>
			<p>{event.date}</p>
			<p>{event.description}</p>
		{/each}
	</div>
{:else}
	<p>No events scheduled for {monthNames[currentMonth]} {currentYear}</p>
{/if}

<style>
	button {
		all: unset;
	}
	.calendar {
		max-width: 300px;
		margin: auto;
		font-family: sans-serif;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 4px;
		margin-top: 10px;
	}
	.day {
		text-align: center;
		padding: 6px;
		background: var(--accent-1);
		border-radius: 4px;
	}
	.blank {
		visibility: hidden;
	}

	.today {
		background-color: var(--accent-2);
		font-weight: bold;
		border: var(--bord-2);
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.6);
		}
		70% {
			box-shadow: 0 0 0 16px rgba(255, 215, 0, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
		}
	}

	.selected {
		position: relative;
		z-index: 1;
		animation: pulse 1.5s infinite;
		border: 2px solid #ffd700;
		background-color: #fffbe6;
	}

	.has-event {
		background-color: var(--hallow);
		border: var(--bord);
	}

	.events {
		margin-top: 20px;
	}
	.event-card {
		background: var(--bg-2);
		border: var(--bord);
		padding: 12px;
		margin-bottom: 10px;
		border-radius: 6px;
	}
	.event-card img {
		max-width: 100%;
		height: auto;
		margin-top: 8px;
	}
</style>
