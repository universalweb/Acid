/**
 * Clears the values out of an array.
 *
 * @function cloneArray
 * @category Array
 * @type {Function}
 * @param {Array} array - Takes an array to be cloned.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { cloneArray, assert } from './Acid.js';
 * assert(cloneArray([1,'B', 'Cat']), [1, 'B', 'Cat']);
 */
export function cloneArray(array) {
	return array.slice();
}

