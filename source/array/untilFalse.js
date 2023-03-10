import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
/**
 * Loops through an array invoking an iteratee with (value, key). If the iteratee always yields true then true is returned.
 * If and when the iteratee yields false the loop stops & false is returned.
 *
 * @function untilFalseArray
 * @category array
 * @type {Function}
 * @param {Array} source - The array to iterate over.
 * @param {Function} iteratee - Transformation function which is passed item & key and expects a boolean to be returned.
 * @returns {Array} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { untilFalseArray, assert } from 'Acid';
 * assert(untilFalseArray([true, true, false], (item) => {
 *   return item;
 * }), false);
 * assert(untilFalseArray([true, true, true], (item) => {
 *   return item;
 * }), true);
 */
export function untilFalseArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
		if (iteratee(source[index], index) === false) {
			return false;
		}
	}
	return true;
}
