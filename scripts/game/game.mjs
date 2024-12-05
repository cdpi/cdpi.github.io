
// Objectif (goal, target) c'est quoi meilleur traduction ?

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Player
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		this.name = name;
		}
	}

const _Player = Player;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Computer extends Player
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		super(name);
		}
	}

const _Computer = Computer;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Human extends Player
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		super(name);
		}
	}

const _Human = Human;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Action
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		this.name = name;
		}
	}

const _Action = Action;

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Tour par tour
class Turn
	{
	constructor()
		{
		}
	}

const _Turn = Turn;

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Game
	{
	constructor()
		{
		}
	}

const _Game = Game;

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	_Player as Player,
	_Computer as Computer,
	_Human as Human,
	_Action as Action,
	_Turn as Turn,
	_Game as Game
	};