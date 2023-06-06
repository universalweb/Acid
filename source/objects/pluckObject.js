import { mapArray } from '../arrays/map.js';
/**
 * Returns an array of the plucked sources from the object. Sources are plucked in the order given by the array.
 *
 * @function pluckObject
 * @category object
 * @type {Function}
 * @param {Object} source - Array used to determine what sources to be plucked.
 * @param {String|Array} pluckThese - Property name.
 * @returns {Array} - An array of plucked sources.
 *
 * @example
 * pluckObject({a: 1, b:3}, ['a','b']);
 * // => [1, 3]
 */
export function pluckObject(source, pluckThese) {
	if (!source) {
		return;
	}
	return mapArray(pluckThese, (item) => {
		return source[item];
	});
}

