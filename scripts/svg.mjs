
import { Point } from "./geometry.mjs";

const _NAMESPACE = "http://www.w3.org/2000/svg";

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Command
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		this.name = name;
		}

	/**
	 * @param {Point} point
	 * 
	 * @returns {String}
	 */
	pointToString(point)
		{
		return `${point.x},${point.y}`;
		}
	}

const _Command = Command;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class MoveTo extends Command
	{
	/**
	 * @param {Point} point
	 */
	constructor(point)
		{
		super("M");

		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}${this.point.x} ${this.point.y}`;
		}
	}

const _MoveTo = MoveTo;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class LineTo extends Command
	{
	/**
	 * @param {Point} to
	 */
	constructor(to)
		{
		super("L");

		this.to = to;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}${this.to.x} ${this.to.y}`;
		}
	}

const _LineTo = LineTo;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class QuadraticCurve extends Command
	{
	/**
	 * @param {Point} controlPoint
	 * @param {Point} point
	 */
	constructor(controlPoint, point)
		{
		super("Q");

		this.controlPoint = controlPoint;
		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		let cp = this.pointToString(this.controlPoint);
		let p = this.pointToString(this.point);

		return `${this.name} ${cp} ${p}`;
		}
	}

const _QuadraticCurve = QuadraticCurve;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class CubicCurve extends Command
	{
	/**
	 * @param {Point} startControlPoint
	 * @param {Point} endControlPoint
	 * @param {Point} point
	 */
	constructor(startControlPoint, endControlPoint, point)
		{
		super("C");

		this.startControlPoint = startControlPoint;
		this.endControlPoint = endControlPoint;
		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		let start = this.pointToString(this.startControlPoint);
		let end = this.pointToString(this.endControlPoint);
		let p = this.pointToString(this.point);

		return `${this.name} ${start} ${end} ${p}`;
		}
	}

const _CubicCurve = CubicCurve;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class ClosePath extends Command
	{
	constructor()
		{
		super("Z");
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}`;
		}
	}

const _ClosePath = ClosePath;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Path
	{
	/**
	 * @param {Command[]} commands
	 */
	constructor(commands = [])
		{
		this.commands = commands;
		}

	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	moveTo(x, y)
		{
		this.commands.push(new MoveTo(new Point(x, y)));

		return this;
		}

	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	lineTo(x, y)
		{
		this.commands.push(new LineTo(new Point(x, y)));

		return this;
		}

	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	quadraticCurve(x, y)
		{
		//this.commands.push(new QuadraticCurve(new Point(x, y), new Point(102, -6)));
		throw "not implemented";
		}

	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	cubicCurve(x, y)
		{
		throw "not implemented";
		}

	closePath()
		{
		this.commands.push(new ClosePath());

		return this;
		}

	toString()
		{
		return this.commands.join("");
		}
	}

const _Path = Path;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class SVG
	{
	constructor()
		{
		}

	static get NAMESPACE()
		{
		return _NAMESPACE;
		}

	/**
	 * @param {String} tagName
	 * @param {Object} attributes
	 */
	static createElement(tagName, attributes = {})
		{
		let element = document.createElementNS(_NAMESPACE, tagName);

		for (let [key, value] of Object.entries(attributes))
			{
			element.setAttribute(key, value);
			}

		return element;
		}

	static circle(x, y, r, attributes = {})
		{
		return this.createElement("circle", { ...{ cx: x, cy: y, r: r}, ...attributes });
		}

	static path(path, attributes = {})
		{
		return this.createElement("path", { ...{ d: path.toString()}, ...attributes });
		}
	}

const _SVG = SVG;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Command as Command,
	_MoveTo as MoveTo,
	_LineTo as LineTo,
	_QuadraticCurve as QuadraticCurve,
	_CubicCurve as CubicCurve,
	_ClosePath as ClosePath,
	_Path as Path,
	_SVG as SVG
	};
