import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the given array while the iteratee returns true else the loop exits & returns false.
 *
 * @function everyArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyArray, assert } from '@universalweb/acid';
 * assert(everyArray([true, true, false], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), false);
 * assert(everyArray([true, true, true], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), true);
 */
function returnBoolean(value) {
	return value;
}
export function everyArray(source, iteratee = returnBoolean, additionalArgument) {
	if (!source) {
		return;
	}
	const sourceLength = source.length;
	for (let index = 0; index < sourceLength; index++) {
		if (iteratee(source[index], index, source, sourceLength, additionalArgument) === false) {
			return false;
		}
	}
	return true;
}
