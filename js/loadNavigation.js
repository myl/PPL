/**
 * Dynamically append a stylesheet to the document header
 * @param {string} url Path of CSS file to append
 */
function appendStylesheet(url) {
	const link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("href", url);
	document.head.appendChild(link);
}

/**
 * Replace a component template with its corresponding markup
 * @param {string} type data-type to load
 * @param {string} html HTML markup to load
 */
async function replaceTemplate(type, includePath) {
	const found = document.querySelector(`template[data-type=${type}]`);
	if (found === null)
		throw new TypeError(`Could not find template ${type} on page ${location.href}`);

	// only load include path if the selector actually exists
	const html = await fetch(includePath).then((res) => res.text());
	found.outerHTML = html;
}

Promise.all([
	replaceTemplate("navbar", "/include/navbar.html"),
	replaceTemplate("footer", "/include/footer.html"),
]);

appendStylesheet("/css/navbar.css");
appendStylesheet("/css/footer.css");