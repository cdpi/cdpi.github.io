
//@ts-check

//@ts-ignore
import { ColorSelector } from "https://cdn.jsdelivr.net/gh/cdpi/js/color.mjs";

export class ColorPaletteGenerator extends ColorSelector
	{
	/**
	 * @param {?HTMLElement} element
	 */
	constructor(element = document.body)
		{
		super(element);
		}
	}

