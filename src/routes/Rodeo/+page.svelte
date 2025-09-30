<script>
	import BullRider from '$lib/imgs/bullRiderSilhouette2.png';
	import Multipass from '$lib/imgs/multipass.png';

	let rodeoEvents = [
		{
			name: 'Bareback Riding',
			part1: 'The rider grips a rigging (like a suitcase handle) strapped to the horse.',
			part2: 'Must “mark out” by keeping spurs above the horse’s shoulders on the first jump.',
			part3: 'Judged on spurring technique and control during the 8-second ride.',
			part4: 'Known for being the most physically punishing event.'
		},
		{
			name: 'Saddle Bronc Riding',
			part1: 'Rodeo’s classic event—riders use a specialized saddle and rein.',
			part2: 'Must maintain rhythm and control while spurring in sync with the horse’s bucking.',
			part3: 'Style and finesse matter as much as grit.'
		},
		{
			name: 'Bull Riding',
			part1: 'The rider holds onto a rope tied around a 2,000-pound bull.',
			part2: 'Must stay on for 8 seconds using only one hand.',
			part3: 'Scored on rider’s control and the bull’s intensity.',
			part4: 'One of the most dangerous and crowd-thrilling events.'
		},
		{
			name: 'Steer Wrestling',
			part1: 'Also called “bulldogging.”',
			part2: 'Rider jumps off a horse, grabs a steer by the horns, and wrestles it to the ground.',
			part3:
				'Requires strength, timing, and help from a “hazer” who keeps the steer running straight.'
		},
		{
			name: 'Team Roping',
			part1: 'Two riders: the “header” ropes the steer’s horns, the “heeler” ropes the hind legs.',
			part2: 'Must work in perfect sync to stop the clock.',
			part3: 'Combines speed, accuracy, and partnership.'
		},
		{
			name: 'Tie-Down Roping',
			part1: 'Rider ropes a calf, dismounts, and ties three of its legs.',
			part2: 'Speed and precision are key.',
			part3: 'The horse must stop and back up smoothly to keep tension on the rope.'
		},
		{
			name: 'Breakaway Roping',
			part1: 'A variation of tie-down roping, typically for women.',
			part2: 'The rope is tied to the saddle horn with a string.',
			part3: 'When the calf is roped, the string breaks—stopping the clock.',
			part4: 'Fastest time wins.'
		},
		{
			name: 'Barrel Racing',
			part1: 'Rider races in a cloverleaf pattern around three barrels.',
			part2: 'Fastest time wins, but knocking over a barrel adds a 5-second penalty.',
			part3: 'Requires tight turns, explosive speed, and horse-rider harmony.'
		}
	];

	let selectedEvent = $state(null);

	function selectEvent(name) {
		selectedEvent = rodeoEvents.find((e) => e.name === name);
	}
</script>

<main class="grid-Main">
	<section
		class="block-List right-Block"
		style={`background-image: url(${BullRider}); background-size: cover; background-position: center;`}
	>
		<h4>Rodeo & Bull Schedule</h4>

		<p>Wed–Fri (Aug. 20–22) <strong>Event starts at 6:30 PM</strong></p>

		<p>Saturday (Aug. 23) <strong>Event starts at 11:00 AM</strong></p>

		<p>Sunday – XTREME BULLS (Aug. 24) <strong>Event starts at 11:00 AM</strong></p>
	</section>
	<section>
		<a href="/Extra/Tickets">
			<button class="ticket-button"><img src={Multipass} alt="kitsap fair entry ticket" /></button>
		</a>
	</section>

	<section>maybe this can be an image of the rodeo</section>

	<br />
	<section class="alert right-Block">
		<p>
			PRCA Photography Policy Fans may take photos from the stands, but only with cell phones or
			small cameras that have lenses smaller than 3". Those caught using cameras with a lens
			attachment, without proper credentials, will be expelled from the rodeo grounds. The
			unauthorized sale of any photographs or videos taken at a PRCA rodeo is prohibited.
		</p>
	</section>

	<p>All rodeo events will be live/streamed on the Cowboy Channel!</p>
	<p>Click an item to learn more about each event. ​</p>
	<table class="rodeo-events right-Block">
		<thead>
			<tr>
				<th>Events</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td onclick={() => selectEvent('Bareback Riding')}>Bareback Riding</td>
				<td onclick={() => selectEvent('Steer Wrestling')}>Steer Wrestling</td>
			</tr>
			<tr>
				<td onclick={() => selectEvent('Team Roping')}>Team Roping</td>
				<td onclick={() => selectEvent('Tie-Down Roping')}>Tie-Down Roping</td>
			</tr>
			<tr>
				<td onclick={() => selectEvent('Saddle Bronc Riding')}>Saddle Bronc Riding</td>
				<td onclick={() => selectEvent('Barrel Racing')}>Barrel Racing</td>
			</tr>
			<tr>
				<td onclick={() => selectEvent('Breakaway Roping')}>Breakaway Roping</td>
				<td onclick={() => selectEvent('Bull Riding')}>Bull Riding</td>
			</tr>
		</tbody>
	</table>
	{#if selectedEvent}
		<div class="event-details right-Block">
			<h3>{selectedEvent.name}</h3>
			<ul>
				{#if selectedEvent.part1}<li>{selectedEvent.part1}</li>{/if}
				{#if selectedEvent.part2}<li>{selectedEvent.part2}</li>{/if}
				{#if selectedEvent.part3}<li>{selectedEvent.part3}</li>{/if}
				{#if selectedEvent.part4}<li>{selectedEvent.part4}</li>{/if}
			</ul>
		</div>
	{/if}

	<h2 class="double-Block">Seating Pricing</h2>

	<article class="block-List">
		<h4>Uncovered Seating</h4>
		<p>General Admission<strong>$35.00</strong></p>
		<p>Military & Seniors<strong>$30.00</strong></p>
		<p>Children 6–12 y.o.<strong>$25.00</strong></p>
		<p>Children 5 & Under<strong>Free</strong></p>
	</article>

	<article class="block-List">
		<h4>Covered Seating</h4>

		<p>General Admission<strong>$40.00</strong></p>
		<p>Military & Seniors<strong>$35.00</strong></p>
		<p>Children 6–12 y.o.<strong>$30.00</strong></p>
		<p>Children 5 & Under<strong>Free</strong></p>
	</article>

	<article class="block-List">
		<h4>Box Seats</h4>

		<p>Box 1<strong>$50.00</strong></p>
		<p>Box 2<strong>$55.00</strong></p>
		<p>Box 3<strong>$60.00</strong></p>
		<p>Box 8<strong>$65.00</strong></p>
		<p>Box 9<strong>$65.00</strong></p>
	</article>

	<p class="double-Block">
		Xtreme Bulls: The world’s top bull riders will converge at this event to attempt riding the
		baddest, meanest, rankest one-ton athletes in the world. These bulls have thrown cowboys at the
		largest rodeo venues in the world.
	</p>

	<h2 class="double-Block">XTREME BULLS PRICING</h2>

	<article class="block-List">
		<h4>Uncovered Seating</h4>

		<p>General Admission<strong>$45.00</strong></p>
		<p>Military & Seniors<strong>$40.00</strong></p>
		<p>Children 6–12 y.o.<strong>$35.00</strong></p>
		<p>Children 5 & Under<strong>Free</strong></p>
	</article>

	<article class="block-List">
		<h4>Covered Seating</h4>

		<p>General Admission<strong>$50.00</strong></p>
		<p>Military & Seniors<strong>$45.00</strong></p>
		<p>Children 6–12 y.o.<strong>$40.00</strong></p>
		<p>Children 5 & Under<strong>Free</strong></p>
	</article>

	<article class="block-List">
		<h4>Box Seats</h4>

		<p>Box 1<strong>$50.00</strong></p>
		<p>Box 2<strong>$60.00</strong></p>
		<p>Box 3<strong>$70.00</strong></p>
		<p>Box 8<strong>$60.00</strong></p>
		<p>Box 9<strong>$60.00</strong></p>
	</article>
</main>
<p class="notice">
	* Rodeo Slack is for the overflow contestants that wouldn't quite fit in the highlighted nightly
	rodeo. There looks to be over 200 competitors at this FREE event.
</p>

<!--svelte-ignore css_unused_selector -->
<style>
	.rodeo-events {
		width: 100%;
		background: linear-gradient(to bottom right, #2c1e13, #110c07);
		border-radius: var(--rad-Sm);
		border: 2px solid var(--border-color);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	}

	.rodeo-events th {
		background-color: var(--accent-2);
		border-radius: var(--rad-Sm) 0;
		padding: var(--size-4);
		font-size: var(--size-6);
		text-transform: uppercase;
	}

	.rodeo-events td {
		padding: var(--size-3);
		border-top: var(--bord-2);
		color: var(--txt-2);
		text-align: center;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.rodeo-events td:hover {
		background-color: var(--hover);
	}

	.event-details {
		margin: 20px 5vw;
		width: 90vw;
		padding: 12px;
		background: var(--bg-2);
		border: var(--bord);
		border-radius: var(--rad-Sm);

		@media (min-width: 768px) {
			margin: 10% 20%;
			width: 60%;

			& h3 {
				margin: 5vh 5vw;
			}
		}

		& ul {
			& li {
				list-style: disc;
				margin: 0.5rem;
			}
		}
	}

	.ticket-button {
		all: unset;
		cursor: pointer;
		display: block;
		margin: 1rem auto;
		transition: transform 0.2s ease;
	}
</style>
