import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@3.4.17/dist/purify.es.mjs";

/**
 * Load template content using dataset properties
 * @param {Element} template
 */
async function loadTemplate(template) {
	const include = template.getAttribute("data-include");
	const css = template.getAttribute("data-css");

	// do before await so we don't get a flash of unstyled content
	if (css !== null) appendStylesheet(`/css/${css}.css`);

	const html = await fetch(`/include/${include}.html`).then((res) => res.text());
	template.outerHTML = DOMPurify.sanitize(html);
}

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

const templates = document.querySelectorAll("template[data-include]");
await Promise.all(Array.from(templates, loadTemplate));
