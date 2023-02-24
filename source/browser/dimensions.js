import { assign } from '../object/assign.js';
import { eventAdd } from './event.js';
import { info } from './info.js';
import { isDocumentReady } from './ready.js';
export function saveDimensions() {
	assign(info, {
		bodyHeight: document.body.offsetHeight,
		bodyWidth: document.body.offsetWidth,
		windowHeight: window.innerHeight,
		windowWidth: window.innerWidth,
	});
}
/**
 * Save current document & window dimensions to the info property.
 *
 * @function updateDimensions
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * updateDimensions();
 */
export function updateDimensions() {
	saveDimensions();
}
isDocumentReady(updateDimensions);
eventAdd(window, 'load', updateDimensions, true);
eventAdd(window, 'resize', updateDimensions, true);

