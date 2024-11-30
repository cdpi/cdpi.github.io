
import { Application } from "../application.mjs";
import { Agenda } from "./agenda.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

class BulletJournal extends Application
	{
	constructor()
		{
		super();

		this.agenda = new Agenda();

		//this.agenda.dispatchEvent(new Event("change"));
		}
	}

const _BulletJournal = BulletJournal;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_BulletJournal as BulletJournal
	};
