import { eventAdd } from './event.js';
import { importjs } from './importScript.js';
import { getById } from './selector.js';
/**
 * Runs a function if the document has finished loading. If not, add an eventlistener.
 *
 * @function isDocumentReady
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Function} callable - Function to be run.
 * @returns {Boolean|Function} - If the document is ready, returns a function. If not, return false.
 *
 * @example
 * isDocumentReady(() => {return 1});
 * // => 1
 */
export function isDocumentReady(callable) {
	const state = document.readyState;
	const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
	if (checkStatus) {
		return (callable) ? callable() : true;
	}
	if (callable) {
		eventAdd(document, 'DOMContentLoaded', callable);
	}
	return false;
}
isDocumentReady(() => {
	const scriptTag = getById('AcidLib');
	const scriptName = (scriptTag && scriptTag.getAttribute('data-index')) || '/index';
	importjs(scriptName);
});
