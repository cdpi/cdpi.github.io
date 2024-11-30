
import { sequence } from "../array.mjs";
import { toRadian, toPoint } from "../geometry.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
class Map
	{
	constructor()
		{
		}
	}

const _Map = Map;

class Zone
	{
	constructor()
		{
		}
	}

const _Zone = Zone;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

function hexagon(size)
	{
	return sequence(6)       // Créer une suite 0, 1,... (6 sommets)
		.map(toRadian(6))    // Convertir en angle en radians
		//.map(toXY(size));  // Convertir en coordonnées X, Y
		.map(toPoint(size)); // Convertir en coordonnées X, Y
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	hexagon
	};
