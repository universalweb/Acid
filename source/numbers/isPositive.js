/**
 * Checks if a number is negative & returns true or false.
 *
 * @function isPositive
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isPositive, assert } from '@universalweb/acid';
 * assert(isPositive(1), true);
 */
const { sign } = Math;
export function isPositive(source) {
	return sign(source) === 1;
}
