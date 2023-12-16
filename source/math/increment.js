/**
 * Increments a number.
 *
 * @function increment
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @returns {Number} - Returns an incremented version of the number.
 *
 * @example
 * import { multiply, assert } from '@universalweb/acid';
 * assert(multiply(10, 5), 50);
 * increment(10);
 * // => 11
 */
export function increment(source) {
	return source + 1;
}
