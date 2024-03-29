import { eachArray } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
 *
 * @function mapRightArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapRightArray, assert } from '@universalweb/acid';
 * assert(mapRightArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [6, 4, 2]);
 */
export function mapRightArray(source, iteratee, results = [], additionalArgument) {
	let trueIndex = 0;
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		results[trueIndex] = iteratee(source[index], index, source, arrayLength, additionalArgument);
		trueIndex++;
	}
	return results;
}

