import { drop } from './drop.js';
/**
 * Removes all items from an array before a specified index.
 *
 * @function dropRight
 * @type {Function}
 * @category array
 * @param {Array} array - Source array.
 * @param {Number} amount - Amount of items to drop from the array.
 * @param {Number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed before a user defined index.
 *
 * @example
 * import { dropRight, assert } from '@universalweb/acid';
 * assert(dropRight([1, 2, 3]), [1, 2]);
 * assert(dropRight([1, 2, 3], 2), [1]);
 */
export const dropRight = (array, amount = 1, upTo = array.length) => {
	return drop(array, 0, upTo - amount);
};

