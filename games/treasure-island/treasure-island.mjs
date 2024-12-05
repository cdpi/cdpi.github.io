
import { hexagon } from "../../scripts/game/map.mjs";
import { Action } from "../../scripts/game/game.mjs";
import { Path, SVG } from "../../scripts/svg.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

const WALK = new Action("walk");
const DIG = new Action("dig");

class AskForHint extends Action
	{
	constructor()
		{
		super("ask-for-hint");
		}
	}

/*
walk
to dig
index
ask for a hint
*/

class Pirate
	{
	constructor()
		{
		}
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Treasure
	{
	constructor()
		{
		}
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Island
	{
	constructor()
		{
		}
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

class TreasureIsland
	{
	constructor()
		{
		let h = hexagon(50);
		console.log(h);
		//let p = new Path().m
		/*
		
		console.log(new Map());
		let p = Path.d(h);
		console.log(p);
		let el = SVG.createElement("path", {d: p, fill: "none", stroke: "red", "stroke-width": "5"});
		console.log(el);
		document.querySelector("#island").appendChild(el);
		*/
		}
	}

const _TreasureIsland = TreasureIsland;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_TreasureIsland as TreasureIsland
	};
