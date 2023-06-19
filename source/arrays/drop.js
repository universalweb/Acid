/**
 * Removes all items from an array after a specified index.
 *
 * @function drop
 * @category array
 * @type {Function}
 * @param {Array} array - Source array.
 * @param {Number} amount - Amount of items to drop from the array.
 * @param {Number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed after a user defined index.
 *
 * @example
 * import { drop, assert } from '@universalweb/acid';
 * assert(drop([1, 2, 3]), [2, 3]);
 * assert(drop([1, 2, 3], 2), [3]);
 */
export function drop(array, amount = 1, upTo = array.length) {
	return array.splice(amount, upTo);
}
