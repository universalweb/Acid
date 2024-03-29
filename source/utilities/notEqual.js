import { isEqual } from './isEqual.js';
import { isFalse } from '../types/isFalse.js';
/**
 * Performs a deep comparison between two objects & determines if they're different using strict comparison.
 *
 * @function notEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { notEqual, assert } from '@universalweb/acid';
 * assert(notEqual({a: [1,2,3]}, {a: [1,3,3]}), true);
 */
export function notEqual(source, target) {
	return isFalse(isEqual(source, target));
}

