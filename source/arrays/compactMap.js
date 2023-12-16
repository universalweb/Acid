import { eachArray } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
 *
 * @function compactMapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array = []} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - An array with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapArray, assert } from '@universalweb/acid';
 * assert(compactMapArray([null, 2, 3], (item) => {
 *   return item;
 * }), [2, 3]);
 */
export function compactMapArray(source, iteratee = returnValue, results = [], thisCall, additionalArg) {
	if (hasValue(thisCall)) {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			const returned = iteratee.call(thisCall, item, index, results, arrayOriginal, arrayLength, additionalArg);
			if (hasValue(returned)) {
				results.push(returned);
			}
		});
	} else {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			const returned = iteratee(item, index, results, arrayOriginal, arrayLength, thisCall, additionalArg);
			if (hasValue(returned)) {
				results.push(returned);
			}
		});
	}
	return results;
}
