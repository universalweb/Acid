import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
/**
 * Loops through an array invoking an iteratee with (value, key). If the iteratee always yields false then true is returned.
 * If and when the iteratee yields true the loop stops & false is returned.
 *
 * @function untilTrueArray
 * @category array
 * @type {Function}
 * @param {Array} source - The array to iterate over.
 * @param {Function} iteratee - Transformation function which is passed item & key and expects a boolean to be returned.
 * @returns {Array} - Returns true if all returns are false or false if one value returns true.
 *
 * @example
 * import { untilTrueArray, assert } from 'Acid';
 * assert(untilTrueArray([true], (item) => {
 *   return item;
 * }), false);
 * assert(untilTrueArray([true, true, true], (item) => {
 *   return item;
 * }), true);
 */
export function untilTrueArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
		if (iteratee(source[index], index) === true) {
			return false;
		}
	}
	return true;
}
