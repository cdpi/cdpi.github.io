
class Random
	{
	constructor()
		{
		}

	/**
	 * @param {Number} minimum
	 * @param {Number} maximum
	 */
	static between(minimum, maximum)
		{
		return Math.random() * (maximum - minimum) + minimum;
		}

	/**
	 * @param {Number?} maximum
	 */
	static get(maximum = Number.MAX_SAFE_INTEGER)
		{
		return this.between(0, maximum);
		}

	/**
	 * @param {Number?} maximum
	 */
	static getInt(maximum = Number.MAX_SAFE_INTEGER)
		{
		return Math.floor(this.get(maximum));
		}
	}

const _Random = Random;

// On renvoie un nombre aléatoire entre une valeur min (incluse) et une valeur max (exclue)

/**
 * @param {Number} minimum
 * @param {Number} maximum
 */
function getRandomxx(minimum, maximum)
	{
	return Math.random() * (maximum - minimum) + minimum;
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Random as Random
	};
