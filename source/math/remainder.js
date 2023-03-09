/**
 *  Extracts the remainder between two numbers.
 *
 * @function remainder
 * @category math
 * @type {Function}
 * @param {number} number - First number.
 * @param {number} value - Second number.
 * @returns {number} - Returns the remainder of the arguments.
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
