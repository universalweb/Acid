import { eventAdd } from './event';
import { importjs } from './importScript';
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
export const isDocumentReady = (callable) => {
	const state = document.readyState;
	const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
	if (checkStatus) {
		return (callable) ? callable() : true;
	}
	if (callable) {
		eventAdd(document, 'DOMContentLoaded', callable);
	}
	return false;
};
isDocumentReady(() => {
	importjs('/index');
});
