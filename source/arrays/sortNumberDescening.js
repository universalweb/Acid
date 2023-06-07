import { subtractReverse } from '../math/subtractReverse.js';
/**
 * Sorts an array of numbers in descending order. Largest to smallest.
 *
 * @function sortNumberDescening
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { sortNumberDescening, assert } from '@universalweb/acid';
 * assert(sortNumberDescening([10, 0, 2, 1]), [10, 2, 1, 0]);
 */
export function sortNumberDescening(numberList) {
	return numberList.sort(subtractReverse);
}
