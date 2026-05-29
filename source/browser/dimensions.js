import { assign } from '../objects/assign.js';
import { eventAdd } from './event.js';
import { info } from './info.js';
import { isDocumentReady } from './ready.js';
export function saveDimensions() {
	assign(info, {
		bodyHeight: document.body.offsetHeight,
		bodyWidth: document.body.offsetWidth,
		windowHeight: globalThis.innerHeight,
		windowWidth: globalThis.innerWidth,
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
if (typeof globalThis.window !== 'undefined') {
	isDocumentReady(updateDimensions);
	eventAdd(globalThis, 'load', updateDimensions, true);
	eventAdd(globalThis, 'resize', updateDimensions, true);
}

