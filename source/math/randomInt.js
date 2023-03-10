const {
	floor,
	random
} = Math;
/**
 *  Produces a random whole number between min (included) and max (excluded). Do not use for security or encryption.
 *
 * @function randomInt
 * @category number
 * @type {Function}
 * @param {number} max - The highest possible value for the random number.
 * @param {number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomInt, assert } from 'Acid';
 * assert(randomInt(10, 0), (value) => { return value > 0 && value < 10;});
 */
export function randomInt(max, min = 0) {
	return floor(random() * (max - min)) + min;
}