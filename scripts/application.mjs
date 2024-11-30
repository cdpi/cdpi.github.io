
class Application extends EventTarget
	{
	constructor()
		{
		super();
		}
	}

const _Application = Application;

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
class Widget extends EventTarget
	{
	constructor()
		{
		super();
		}

	render()
		{
		//throw new Error("sddsd");
		}
	}

const _Widget = Widget;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Application as Application
	};
