/**
 * Subtract all numbers in the array starting from left to right & return the difference.
 *
 * @function subtractAll
 * @category math
 * @type {Function}
 * @param {Number[]} source - Array of numbers.
 * @returns {Number} - Returns the final difference.
 *
 * @example
 * import { subtractAll, assert } from '@universalweb/acid';
 * assert(subtractAll([10, 1, 2, 3]), 5);
 */
export function subtractAll(source) {
	return source.reduce((a, b) => {
		return a - b;
	}, 0);
}

