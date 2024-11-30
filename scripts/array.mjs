
/**
 * @param {Number} start
 */
function increment(start = 0)
	{
	return (value, index) => start + index;
	}

/**
 * @param {Number} start
 */
function decrement(start)
	{
	return (value, index) => start - index;
	}

/**
 * @param {Number} count
 * @param {Function} generator
 */
function sequence(count, generator = increment(0))
	{
	return Array.from({length: count}, generator);
	}

/**
 * Créer une série de nombre (suite 0, 1, 2,... pour l'instant).
 * 
 * @param {Number} count
 * 
 * @returns {Number[]}
 */
/*
function sequence(count)
	{
	return Array.from({length: count}, _KEY);
	}
*/

export
	{
	increment,
	decrement,
	sequence
	};
