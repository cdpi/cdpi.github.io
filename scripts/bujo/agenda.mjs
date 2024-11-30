
import { Calendar } from "../calendar.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
class Event
	{
	/**
	 * @param {String} title
	 * @param {String} description
	 * @param {Date} date
	 * /
	constructor(title, description, date)
		{
		this.title = title;
		this.description = description;
		this.date = date;
		}
	}

const _Event = Event;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Agenda extends EventTarget
	{
	constructor()
		{
		super();

		this.calendar = new Calendar();
		//this.events = events;

		this.addEventListener("change", event =>
			{
			console.log(event);
			});
		}

	setDate(day, month, year)
		{
		this.calendar.date = new Date(year, month, day);
		}

	/*
	getEvents(year, month)
		{
		return this.events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);
		}

	query()
		{
		return [new Event(), new Event(), new Event()];
		}
	*/
	}

const _Agenda = Agenda;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Agenda as Agenda
	};
