import { eachArray } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the given and creates an object with all elements that pass the test implemented by the iteratee.
 *
 * @function mapWhile
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { mapWhile, assert } from '@universalweb/acid';
 * assert(mapWhile([1, 2, 0], (item) => {
 *   return Boolean(item);
 * }), [1, 2]);
 */
export function mapWhile(source, iteratee, results = [], additionalArgument) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		const item = source[index];
		const returned = iteratee(item, index, results, source, arrayLength, additionalArgument);
		if (returned === false) {
			break;
		}
		results[index] = item;
	}
	return results;
}

