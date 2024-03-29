/**
 * Checks if two numbers are the same.
 *
 * @function isNumberEqual
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} target - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberEqual, assert } from '@universalweb/acid';
 * assert(isNumberEqual(0, 0), true);
 */
export function isNumberEqual(source, target) {
	return source === target;
}
