
class Calendar
	{
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
	}

