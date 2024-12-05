
import { sum } from "./array.mjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////

const BORDER_BOX = "border-box";
const CONTENT_BOX = "content-box";
const PADDING_BOX = "padding-box";

///////////////////////////////////////////////////////////////////////////////////////////////////////

const CSS_PIXEL_REGEXP = /([0-9]+(\.[0-9]+)?)px/;

const px = value =>
	{
	let found = value.match(CSS_PIXEL_REGEXP);

	return (found === null) ? 0.0 : parseFloat(found[1]);
	};

///////////////////////////////////////////////////////////////////////////////////////////////////////

const isBackgroundClipBorderBox = style => (style.backgroundClip === BORDER_BOX);
const isBackgroundClipContentBox = style => (style.backgroundClip === CONTENT_BOX);
const isBackgroundClipPaddingBox = style => (style.backgroundClip === PADDING_BOX);

const isBoxSizingBorderBox = style => (style.boxSizing === BORDER_BOX);
const isBoxSizingContentBox = style => (style.boxSizing === CONTENT_BOX);

///////////////////////////////////////////////////////////////////////////////////////////////////////

const borders = style =>
	{
	return [px(style.borderTopWidth), px(style.borderRightWidth), px(style.borderBottomWidth), px(style.borderLeftWidth)];
	};

const margins = style =>
	{
	return [px(style.marginTop), px(style.marginRight), px(style.marginBottom), px(style.marginLeft)];
	};

const paddings = style =>
	{
	return [px(style.paddingTop), px(style.paddingRight), px(style.paddingBottom), px(style.paddingLeft)];
	};

///////////////////////////////////////////////////////////////////////////////////////////////////////

const devGetFinalPosition = (element) =>
	{
	let rect = element.getBoundingClientRect();

	let x = rect.left + window.scrollX;
	let y = rect.top + window.scrollY;

	//return [x, y];
	//window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top // Y

	let style = window.getComputedStyle(element);

	return sum([borders(style), margins(style), paddings(style)]);
	};

///////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	isBackgroundClipBorderBox,
	isBackgroundClipContentBox,
	isBackgroundClipPaddingBox,
	isBoxSizingBorderBox,
	isBoxSizingContentBox,
	borders,
	margins,
	paddings,

	devGetFinalPosition
	};
