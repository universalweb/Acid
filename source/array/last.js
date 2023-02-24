/**
 * Extracts item(s) from an array starting from the last item in the array.
 *
 * @function last
 * @type {Function}
 * @category array
 * @param {Array} array - Array to have items extracted from.
 * @param {number} [indexFrom = 0] - Value which determines how many items are extracted from the array.
 * @returns {Array} - Items from the array.
 *
 * @example
 * import { last, assert } from './Acid.js';
 * assert(last([1, 2, 3, 4, 5] , 2), [4, 5]);
 */
export function last(array, indexFrom) {
	const arrayLength = array.length;
	return (indexFrom) ? array.slice(arrayLength - indexFrom, arrayLength) : array[arrayLength - 1];
}

