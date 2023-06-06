const { random } = Math;
/**
 *  Produces a random floating-point number between min (included) and max (excluded). Do not use for security or encryption.
 *
 * @function randomFloat
 * @category math
 * @type {Function}
 * @param {Number} max - Establishes highest possible value for the random number.
 * @param {Number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {Number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomFloat, assert } from 'Acid';
 * assert(randomFloat(10, 0), (value) => { return value > 0 && value < 10;});
 * // => 9.1
 */
export function randomFloat(max, min = 0) {
	return random() * (max - min) + min;
}
