import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the given array while the iteratee returns true else the loop exits & returns false.
 *
 * @function everyAsyncArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyAsyncArray, assert } from '@universalweb/acid';
 * assert(everyAsyncArray([true, true, false], (item, index, source, sourceLength, thisBind) => {
 *   return item;
 * }), false);
 * assert(everyAsyncArray([true, true, true], (item, index, source, sourceLength, thisBind) => {
 *   return item;
 * }), true);
 */
export async function everyAsyncArray(source, iteratee, thisBind) {
	if (!source) {
		return;
	}
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
		if (await iteratee(source[index], index, source, sourceLength, thisBind) === false) {
			return false;
		}
	}
	return true;
}
