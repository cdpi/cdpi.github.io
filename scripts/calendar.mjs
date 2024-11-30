
import { sequence, increment, decrement } from "./array.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

const _DAY = [6, 0, 1, 2, 3, 4, 5];

///////////////////////////////////////////////////////////////////////////////////////////////////////

const _JANUARY = 0;
const _FEBRUARY = 1;
const _MARCH = 2;
const _APRIL = 3;
const _MAY = 4;
const _JUNE = 5;
const _JULY = 6;
const _AUGUST = 7;
const _SEPTEMBER = 8;
const _OCTOBER = 9;
const _NOVEMBER = 10;
const _DECEMBER = 11;

class Month
	{
	constructor()
		{
		}

	static get JANUARY()
		{
		return _JANUARY;
		}

	static get FEBRUARY()
		{
		return _FEBRUARY;
		}

	static get MARCH()
		{
		return _MARCH;
		}

	static get APRIL()
		{
		return _APRIL;
		}

	static get MAY()
		{
		return _MAY;
		}

	static get JUNE()
		{
		return _JUNE;
		}

	static get JULY()
		{
		return _JULY;
		}

	static get AUGUST()
		{
		return _AUGUST;
		}

	static get SEPTEMBER()
		{
		return _SEPTEMBER;
		}

	static get OCTOBER()
		{
		return _OCTOBER;
		}

	static get NOVEMBER()
		{
		return _NOVEMBER;
		}

	static get DECEMBER()
		{
		return _DECEMBER;
		}
	}

const _Month = Month;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Calendar
	{
	constructor()
		{
		this.date = new Date();
		}

	get weeks()
		{
		let month = this.date.getMonth();
		let year = this.date.getFullYear();

		let weeks = [];

		let firstDayOfMonth = _DAY[new Date(year, month, 1).getDay()];

		// Est-ce qu'il y a des jours du mois précédent ?
		if (firstDayOfMonth > 0)
			{
			let previous = Calendar.getDaysInMonth(month - 1, year);

			let days = sequence(firstDayOfMonth, increment(previous - firstDayOfMonth + 1));
			console.log(days);
			}

		let current = Calendar.getDaysInMonth(month, year);
		let next = Calendar.getDaysInMonth(month + 1, year);

		return null;
		}

	/*
	get month()
		{
		return new Month();
		}
	*/

	/**
	 * @param {Number} month 0 - 11
	 * @param {Number} year
	 * 
	 * @returns {Number[]}
	 */
	static days(month, year)
		{
		return sequence(Calendar.getDaysInMonth(month, year));
		}

	/**
	 * @param {Number} month 0 - 11
	 * @param {Number} year
	 * 
	 * @returns {Number}
	 */
	static getDaysInMonth(month, year)
		{
		// Mois + 1 pour avoir le mois suivant et day 0 pour avoir le jour précédent :)
		return new Date(year, month + 1, 0).getDate();
		}

	/**
	 * @param {Number} month 0 - 11
	 * @param {Number} year
	 */
	static getLastDaysOfMonth(month, year)
		{
		throw "not implemented";
		}
	}

const _Calendar = Calendar;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Month as Month,
	_Calendar as Calendar
	};
