import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapArray, assert } from 'Acid';
 * assert(mapArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
export function mapArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		results[index] = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
	});
	return results;
}
