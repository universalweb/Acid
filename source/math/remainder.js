/**
 *  Extracts the remainder between two numbers.
 *
 * @function remainder
 * @category math
 * @type {Function}
 * @param {Number} number - First number.
 * @param {Number} value - Second number.
 * @returns {Number} - Returns the remainder of the arguments.
 *
 * @example
 * import { multiply, assert } from 'Acid';
 * assert(multiply(10, 5), 50);
 * remainder(10, 6);
 * // => 4
 */
export function remainder(source, value) {
	return source % value;
}
