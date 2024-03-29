import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the given array in reverse.
 *
 * @function eachRight
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - The originally given array.
 *
 * @example
 * import { eachRight, assert } from '@universalweb/acid';
 * const tempList = [];
 * eachRight([1, 2, 3], (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
export function eachRight(source, iteratee, additionalArgument) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		iteratee(source[index], index, source, arrayLength, additionalArgument);
	}
	return source;
}

