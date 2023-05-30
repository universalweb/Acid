import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
import { eachAsyncArray } from './eachAsync.js';
/**
 * Iterates through the calling array and creates an array with all elements that pass the test implemented by the iteratee.
 *
 * @function filterAsyncArray
 * @category array
 * @type {Function}
 * @category array
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created object, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { filterAsyncArray, assert } from 'Acid';
 * assert(filterAsyncArray([false, true, true], (item) => {
 *   return item;
 * }), [true, true]);
 */
export async function filterAsyncArray(source, iteratee, results = [], thisBind) {
	await eachAsyncArray(source, async (item, index, arrayOriginal, arrayLength) => {
		if (await iteratee(item, index, results, arrayOriginal, arrayLength, thisBind) === true) {
			results.push(item);
		}
	});
	return results;
}

