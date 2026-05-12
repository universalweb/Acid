const mathNativeMin = Math.min;
/**
 * Plucks the smallest value from an array.
 *
 * @function smallest
 * @category array
 * @type {Function}
 * @param {Array} array - Array from which smallest number is taken.
 * @returns {Number} - The smallest number.
 *
 * @example
 * import { smallest, assert } from '@universalweb/acid';
 * assert(smallest([1, 2, 3]), 1);
 */
export function smallest(array) {
	return mathNativeMin(...array);
}

