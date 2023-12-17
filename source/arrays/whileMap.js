import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
 * Re-checks the length each loop.
 *
 * @function whileMapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileMapArray, assert } from '@universalweb/acid';
 * assert(whileMapArray([1, 2, 3], (item, index, source) => {
 *   if (index === 0) {
 *     source.push(4);
 *   }
 *   return item;
 * }), [1, 2, 3, 4]);
 */
export function whileMapArray(source, iteratee, results = [], additionalArgument) {
	let index = 0;
	while (index < source.length) {
		results.push(iteratee(source[index], index, source, source.length, additionalArgument));
		index++;
	}
	return source;
}

