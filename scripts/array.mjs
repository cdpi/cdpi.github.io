
/**
 * @param {*} initialValue
 */
function initialize(initialValue)
	{
	return () => initialValue;
	}

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

// Additonne des tableaux dans array.reduce. Pas top comme nom mais ça reste privé ;-)
const _SUM = (accumulator, array) => accumulator.map((value, index) => value + array[index]);

/**
 * @param {[][]} arrays
 */
function sum(arrays)
	{
	return arrays.reduce(_SUM, sequence(arrays[0].length, initialize(0)));
	}

export
	{
	initialize,
	increment,
	decrement,
	sequence,
	sum
	};
