import { subtractReverse } from '../math/subtractReverse.js';
/**
 * Sorts an array of numbers in descending order. Largest to smallest.
 *
 * @function sortNumberDescending
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { sortNumberDescending, assert } from '@universalweb/acid';
 * assert(sortNumberDescending([10, 0, 2, 1]), [10, 2, 1, 0]);
 */
export function sortNumberDescending(numberList) {
	return numberList.sort(subtractReverse);
}
