import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the given array.
 *
 * @function eachArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, array length, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { eachArray, assert } from '@universalweb/acid';
 * const list = [];
 * eachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
export function eachArray(source, iteratee, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			iteratee.call(thisCall, source[index], index, source, arrayLength, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			iteratee(source[index], index, source, arrayLength, additionalArg);
		}
	}
	return source;
}

