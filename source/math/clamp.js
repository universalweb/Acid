/**
 * Constrains a number to lie within an inclusive range.
 *
 * @function clamp
 * @category math
 * @type {Function}
 * @param {Number} value - The number to clamp.
 * @param {Number} lower - The lower bound (inclusive).
 * @param {Number} upper - The upper bound (inclusive).
 * @returns {Number} - Returns the clamped value.
 *
 * @example
 * import { clamp, assert } from '@universalweb/acid';
 * assert(clamp(15, 0, 10), 10);
 * assert(clamp(-5, 0, 10), 0);
 * assert(clamp(5, 0, 10), 5);
 */
export function clamp(value, lower, upper) {
	if (value < lower) {
		return lower;
	}
	if (value > upper) {
		return upper;
	}
	return value;
}
