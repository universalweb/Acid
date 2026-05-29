/**
 * Checks if `source` is an odd integer. Non-integers, NaN, and Infinity all return false.
 *
 * @function isOdd
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isOdd, assert } from '@universalweb/acid';
 * assert(isOdd(1), true);
 * assert(isOdd(2), false);
 * assert(isOdd(1.5), false);
 */
export function isOdd(source) {
	return Number.isInteger(source) && (source & 1) === 1;
}
