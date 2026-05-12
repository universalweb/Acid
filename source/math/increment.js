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
 * import { increment, assert } from '@universalweb/acid';
 * assert(increment(10), 11);
 */
export function increment(source) {
	return source + 1;
}
