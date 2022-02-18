import namespace from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { info } from './info';
import { isDocumentReady } from './ready';
export const saveDimensions = () => {
	assign(info, {
		bodyHeight: document.body.offsetHeight,
		bodyWidth: document.body.offsetWidth,
		windowHeight: window.innerHeight,
		windowWidth: window.innerWidth,
	});
};
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
export const updateDimensions = () => {
	saveDimensions();
};
isDocumentReady(updateDimensions);
eventAdd(window, 'load', updateDimensions, true);
eventAdd(window, 'resize', updateDimensions, true);
assign(namespace, {
	saveDimensions,
	updateDimensions
});
