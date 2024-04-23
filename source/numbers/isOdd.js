/**
 * Checks if a number is odd & returns true or false.
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
 */
export function isOdd(source) {
	return (source & 1) === 1;
}
