/**
 * Subtract all numbers in the array starting from left to right & return the difference.
 *
 * @function sub
 * @category math
 * @type {Function}
 * @param {number[]} source - Array of numbers.
 * @returns {number} - Returns the final difference.
 *
 * @example
 * import { sub, assert } from 'Acid';
 * assert(sub([10, 1, 2, 3]), 5);
 */
export function sub(source) {
	return source.reduce((a, b) => {
		return a - b;
	}, 0);
}

