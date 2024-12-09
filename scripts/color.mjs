
///////////////////////////////////////////////////////////////////////////////////////////////////////

class Component
	{
	/**
	 * @param {Number} minimum
	 * @param {Number} maximum
	 * @param {Boolean} rounded
	 */
	constructor(minimum, maximum, rounded = true)
		{
		this.minimum = minimum;
		this.maximum = maximum;
		this.rounded = rounded;
		}

	get value()
		{
		return this._value;
		}

	/**
	 * @param {Number} value
	 */
	set value(value)
		{
		this._value = this.validate(value);
		}

	/**
	 * @param {Number} value
	 */
	validate(value)
		{
		if (this.rounded)
			{
			value = Math.round(value);
			}

		if (value < this.minimum)
			{
			return this.minimum;
			}

		if (value > this.maximum)
			{
			return this.maximum;
			}

		return value;
		}
	}

const _Component = Component;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Color
	{
	constructor()
		{
		}

	toRGB()
		{
		if (this instanceof RGB)
			{
			return this;
			}

		if (this instanceof HSL)
			{
			let rgb = Color.HSL2RGB(this.hue, this.saturation / 100.0, this.lightness / 100.0);

			return new RGB(rgb[0], rgb[1], rgb[2]);
			}

		throw new Error("unsupported");
		}

	toHSL()
		{
		if (this instanceof HSL)
			{
			return this;
			}

		throw new Error("not implemented");
		}

	static HSL2RGB(hue, saturation, lightness)
		{
		let a = saturation * Math.min(lightness, 1 - lightness);

		let f = (n, k = (n + hue / 30) % 12) => lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

		return [f(0), f(8), f(4)];

		// input: h as an angle in [0,360] and s,l in [0,1] - output: r,g,b in [0,1]
		/*
		function hsl2rgb(h,s,l)
			{
			let a=s*Math.min(l,1-l);
			let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);
			return [f(0),f(8),f(4)];
			}
		*/
		}
	}

const _Color = Color;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class RGB extends Color
	{
	/**
	 * @param {Number} red
	 * @param {Number} green
	 * @param {Number} blue
	 */
	constructor(red, green, blue)
		{
		super();

		this._red = new Component(0, 255);
		this._green = new Component(0, 255);
		this._blue = new Component(0, 255);

		this.red = red;
		this.green = green;
		this.blue = blue;
		}

	get red()
		{
		return this._red.value;
		}

	/**
	 * @param {Number} value
	 */
	set red(value)
		{
		this._red.value = value;
		}

	get green()
		{
		return this._green.value;
		}

	/**
	 * @param {Number} value
	 */
	set green(value)
		{
		this._green.value = value;
		}

	get blue()
		{
		return this._blue.value;
		}

	/**
	 * @param {Number} value
	 */
	set blue(value)
		{
		this._blue.value = value;
		}

	/**
	 * @param {RGB} color
	 * @param {Number} intensity
	 */
	overlay(color, intensity = 1.0)
		{
		let mix = (left, right) =>
			{
			let value = (left < 128) ? (2 * right * left / 255) : (255 - 2 * (255 - left) * (255 - right) / 255);

			value = (value * intensity + (left * (1 - intensity)));

			return value;
			};

		let red = mix(this.red, color.red, intensity);
		let green = mix(this.green, color.green, intensity);
		let blue = mix(this.blue, color.blue, intensity);

		return new RGB(red, green, blue);
		}

	toString()
		{
		return `rgb(${this.red}, ${this.green}, ${this.blue})`;
		}
	}

const _RGB = RGB;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class HSL extends Color
	{
	/**
	 * @param {Number} hue
	 * @param {Number} saturation
	 * @param {Number} lightness
	 */
	constructor(hue, saturation, lightness)
		{
		super();

		this._hue = new Component(0, 360);
		this._saturation = new Component(0, 100, false);
		this._lightness = new Component(0, 100, false);

		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
		}

	get hue()
		{
		return this._hue.value;
		}

	/**
	 * @param {Number} value
	 */
	set hue(value)
		{
		this._hue.value = value;
		}

	get saturation()
		{
		return this._saturation.value;
		}

	/**
	 * @param {Number} value
	 */
	set saturation(value)
		{
		this._saturation.value = value;
		}

	get lightness()
		{
		return this._lightness.value;
		}

	/**
	 * @param {Number} value
	 */
	set lightness(value)
		{
		this._lightness.value = value;
		}

	toString()
		{
		return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
		}
	}

const _HSL = HSL;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Palette
	{
	constructor()
		{
		this.colors = [];
		}

	add(red, green, blue)
		{
		this.colors.push(new RGB(red, green, blue));
		}

	overlay(red, green, blue, intensity = 1.0)
		{
		let rgb = new RGB(red, green, blue);

		let colors = this.colors.map(color => color.overlay(rgb, intensity));

		let palette = new Palette();

		palette.colors = colors;

		return palette;
		}

	toHTML()
		{
		let colors = this.colors.map(color => `<div class="color" style="background-color: ${color.toString()};">&nbsp;</div>`).join("\n");

		return `<div class="palette">${colors}</div>`;
		}

	toString(mode = "css")
		{
		if (mode === "gimp")
			{
			return "GIMP Palette\n" + this.colors.map(color => `${color.red} ${color.green} ${color.blue}`).join("\n");
			}

		return this.colors.map((color, index) => `--color-${index + 1}: ${color.toString()};`).join("\n");
		}
	}

const _Palette = Palette;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Component as Component,
	_Color as Color,
	_RGB as RGB,
	_HSL as HSL,
	_Palette as Palette
	};
