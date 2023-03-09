import { isEqual } from '../utility/isEqual.js';
/**
 * Performs a deep comparison between two objects & determines if they're different using strict comparison.
 *
 * @function notEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { notEqual, assert } from 'Acid';
 * assert(notEqual({a: [1,2,3]}, {a: [1,3,3]}), true);
 */
export function notEqual(source, target) {
	return isEqual(source, target) === false;
}

