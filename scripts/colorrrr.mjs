
import parse5 from "https://cdn.jsdelivr.net/npm/parse5@7.2.1/+esm";

async function parse()
	{
	let response = await fetch("https://en.wikipedia.org/wiki/Web_colors");

	let html = await response.text();

	return parse5.parse(html);
	}

//new DOMParser();
//const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
//console.log(document.childNodes[1].tagName); //> 'html'
console.log(parse().childNodes[1].tagName);
