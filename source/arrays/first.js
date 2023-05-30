/**
 * Takes the first or multiple items from an array.
 *
 * @function first
 * @type {Function}
 * @category array
 * @param {Array} array - Array to extract from.
 * @param {number} upTo - Number which determines how many items after the first item are extracted from the array.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { first, assert } from 'Acid';
 * assert(first([1, 2, 3]), 1);
 */
export function first(array, upTo) {
	return (upTo) ? array.slice(0, upTo) : array[0];
}

