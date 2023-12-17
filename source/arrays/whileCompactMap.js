import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results,
 * (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 * Re-checks the length each loop.
 *
 * @function whileCompactMap
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileCompactMap, assert } from '@universalweb/acid';
 * assert(whileCompactMap([1, 2, 3, false, undefined, null], (item) => {
 *   return item;
 * }), [1, 2, 3, false]);
 */
export function whileCompactMap(source, iteratee, results = [], additionalArgument) {
	let index = 0;
	while (index < source.length) {
		const result = results.push(iteratee(source[index], index, source, source.length, additionalArgument));
		index++;
		if (hasValue(result)) {
			results.push(result);
		}
	}
	return source;
}

