import { append } from './append';
import { hasDot } from '../internal/is';
import { eventAdd } from './event';
import { nodeAttribute } from './attribute';
import { promise } from '../utility/promise';
import { querySelector } from './selector';
const createElementCache = document.createElement.bind(document);
const nodeAttachLoadingEvents = (node) => {
	return promise((accept) => {
		eventAdd(node, 'load', accept, true);
		eventAdd(node, 'error', accept, true);
		append(querySelector('head'), node);
	});
};
/**
  * Asynchronously import a js file and append it to the head node.
  * If a script fails to load importjs won't reject the promise rather it'll return the error event to limit further complications & reduce code complexity.
  *
  * @function importjs
  * @category browser
  * @type {Function}
  * @async
  * @param {*} url - URL of the script to import. If not "." is found in the file name ".js" will be appended.
  * @returns {Promise} - Returns a promise which returns a "load" or "error" event associated with the script.
  *
  * @example
  * importjs('core.js');
  * importjs('core');
*/
export const importjs = (url) => {
	const src = hasDot(url) && url || `${url}.js`;
	const node = nodeAttribute(createElementCache('script'), {
		async: '',
		src
	});
	return nodeAttachLoadingEvents(node);
};

