/**
 * Sum all numbers in a given array.
 *
 * @function sum
 * @category math
 * @type {Function}
 * @param {number[]} source - Array of numbers.
 * @returns {number} - Returns a single number.
 *
 * @example
 * import { sum, assert } from 'Acid';
 * assert(sum([10, 1, 2, 3]), 5);
 */
export function sum(source) {
	return source.reduce((a, b) => {
		return a + b;
	}, 0);
}

