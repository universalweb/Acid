import { subtract } from '../math/subtract.js';
/**
 * Sorts an array of numbers in ascending order. Smallest to largest.
 *
 * @function sortNumberAscending
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { sortNumberAscending, assert } from 'Acid';
 * assert(sortNumberAscending([10, 0, 2, 1]),  [0, 1, 2, 10]);
 */
export function sortNumberAscending(numberList) {
	return numberList.sort(subtract);
}
