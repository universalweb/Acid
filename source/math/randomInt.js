const {
	floor,
	random
} = Math;
/**
 * Roduces a random whole number between min (included) and max (excluded). Do not use for security or encryption..
 *
 * @function randomInt
 * @category number
 * @type {Function}
 * @param {Number} max - The highest possible value for the random number.
 * @param {Number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {Number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomInt, assert } from '@universalweb/acid';
 * assert(randomInt(10, 0), (value) => { return value > 0 && value < 10;});
 */
export function randomInt(max, min = 0) {
	return floor(random() * (max - min)) + min;
}
