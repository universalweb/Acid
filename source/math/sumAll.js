/**
 * Sum all numbers in a given array.
 *
 * @function sumAll
 * @category math
 * @type {Function}
 * @param {Number[]} source - Array of numbers.
 * @returns {Number} - Returns a single number.
 *
 * @example
 * import { sumAll, assert } from '@universalweb/acid';
 * assert(sumAll([10, 1, 2, 3]), 5);
 */
export function sumAll(source) {
	return source.reduce((a, b) => {
		return a + b;
	}, 0);
}

