/**
 * Extracts the remainder between two numbers.
 *
 * @function remainder
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @param {Number} value - Second number.
 * @returns {Number} - Returns the remainder of the arguments.
 *
 * @example
 * import { multiply, assert } from '@universalweb/acid';
 * assert(multiply(10, 5), 50);
 * remainder(10, 6);
 * // => 4
 */
export function remainder(source, value) {
	return source % value;
}
