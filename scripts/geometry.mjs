
const _TWO_PI = 2 * Math.PI;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Point
	{
	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	constructor(x, y)
		{
		this.x = x;
		this.y = y;
		}

	toString()
		{
		return `(${this.x}, ${this.y})`;
		}
	}

const _Point = Point;

///////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Number} count
 * 
 * @returns {Function}
 */
function toRadian(count)
	{
	return angle => _TWO_PI * angle / count;
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Number} r // radius // Pas sur radius (r de SVG)
 * 
 * @returns {Function}
 */
function toPoint(r)
	{
	return angle =>
		{
		let x = r * Math.cos(angle);
		let y = r * Math.sin(angle);

		return new Point(x, y);
		};
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
class Polygon
	{
	constructor(n)
		{
		this.n = n;
		}
	}

const _Polygon = Polygon;

class Hexagon extends Polygon
	{
	constructor()
		{
		super(6);
		}
	}

const _Hexagon = Hexagon;
*/

export
	{
	_Point as Point,
	toRadian,
	toPoint
	};
