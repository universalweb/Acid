/**
 * Checks if a number is negative & returns true or false.
 *
 * @function isNegative
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNegative, assert } from '@universalweb/acid';
 * assert(isNegative(-1), true);
 */
const { sign } = Math;
export function isNegative(source) {
	return sign(source) === -1;
}
