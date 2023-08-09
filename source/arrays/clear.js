/**
 * Clears the values out of an array.
 *
 * @function clearArray
 * @category Array
 * @type {Function}
 * @param {Array} source - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clearArray, assert } from '@universalweb/acid';
 * assert(clearArray([1,'B', 'Cat']), []);
 */
export function clearArray(source) {
	source.length = 0;
	return source;
}

