
let response = await fetch("properties.json");

let json = await response.json();

let html = "<table>";

for (let key in json)
	{
	let value = (json[key] === null) ? "" : json[key];

	let row = `<tr><td>${key}</td><td>${value}</td></tr>`;

	html += row;
	}

html += "</table>";

document.body.insertAdjacentHTML("beforeend", html);
