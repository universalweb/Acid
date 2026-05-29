/**
 * Checks if `source` is an even integer. Non-integers, NaN, and Infinity all return false.
 *
 * @function isEven
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEven, assert } from '@universalweb/acid';
 * assert(isEven(2), true);
 * assert(isEven(1), false);
 * assert(isEven(1.5), false);
 */
export function isEven(source) {
	return Number.isInteger(source) && (source & 1) === 0;
}

