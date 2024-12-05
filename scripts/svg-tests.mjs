
import { sequence } from "./array.mjs";
import { toRadian, toPoint } from "./geometry.mjs";
import { Path, MoveTo, LineTo, ClosePath, SVG } from "./svg.mjs";

let svg = document.querySelector("#svg");

function hexagon()
	{
	let points = sequence(6)
		.map(toRadian(6))
		.map(toPoint(50));

	let path = new Path();

	let first = points.shift();

	path.commands.push(new MoveTo());
	}

export function test()
	{
	}
