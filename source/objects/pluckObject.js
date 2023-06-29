import { isString } from '../types/isString.js';
import { mapArray } from '../arrays/map.js';
/**
 * Returns an array of the plucked sources from the object. Sources are plucked in the order given by the array.
 *
 * @function pluckObject
 * @category object
 * @type {Function}
 * @param {Object} source - Array used to determine what sources to be plucked.
 * @param {String|Array} targets - Property name.
 * @returns {Array} - An array of plucked sources.
 *
 * @example
 * import { pluckObject, assert } from '@universalweb/acid';
 * assert(pluckObject({a: 1, b:3}, ['a','b']), [1, 3]);
 */
export function pluckObject(source, targets) {
	if (!source) {
		return;
	} else if (isString(targets)) {
		return source[targets];
	}
	return mapArray(targets, (item) => {
		return source[item];
	});
}

