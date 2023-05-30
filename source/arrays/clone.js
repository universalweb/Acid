/**
 * Clone an array (uses .slice()) and assign the source arrays values to the new array.
 *
 * @function cloneArray
 * @category Array
 * @type {Function}
 * @param {Array} source - The array to be quick cloned.
 * @returns {Array} - The newly cloned array with assigned items.
 *
 * @example
 * import { cloneArray, assert } from 'Acid';
 * assert(cloneArray([1,'B', 'Cat']), [1, 'B', 'Cat']);
 */
export function cloneArray(source) {
	return source.slice();
}

