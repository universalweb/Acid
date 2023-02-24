import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
import { eachArray } from './each.js';
/**
 * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
 *
 * @function compactMapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapArray, assert } from './Acid.js';
 * assert(compactMapArray([null, 2, 3], (item) => {
 *   return item;
 * }), [2, 3]);
 */
export function compactMapArray(source, iteratee = returnValue, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		const returned = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
		if (hasValue(returned)) {
			results.push(returned);
		}
	});
	return results;
}

