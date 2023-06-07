const mathNativeMax = Math.max;
/**
 * Plucks the largest value from an array.
 *
 * @function largest
 * @type {Function}
 * @category array
 * @param {Array} array - Array from which largest number is taken.
 * @returns {Number} - The largest number.
 *
 * @example
 * import { largest, assert } from '@universalweb/acid';
 * assert(largest([1,2,3]), 3);
 */
export function largest(array) {
	return mathNativeMax(...array);
}

