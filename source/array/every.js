import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
/**
 * Iterates through the given array while the iteratee returns true.
 *
 * @function everyArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyArray, assert } from 'Acid';
 * assert(everyArray([true, true, false], (item) => {
 *   return item;
 * }), false);
 */
export function everyArray(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		if (iteratee(source[index], index, source, arrayLength, thisBind) === false) {
			return false;
		}
	}
	return true;
}

