import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
import { eachArray } from './each.js';
/**
 * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
 *
 * @function mapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapArray, assert } from '@universalweb/acid';
 * assert(mapArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
export function mapArray(source, iteratee, results = [], thisCall, additionalArg) {
	if (hasValue(thisCall)) {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			results[index] = iteratee.call(thisCall, item, index, results, arrayOriginal, arrayLength, additionalArg);
		});
	} else {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			results[index] = iteratee(item, index, results, arrayOriginal, arrayLength, additionalArg);
		});
	}
	return results;
}
