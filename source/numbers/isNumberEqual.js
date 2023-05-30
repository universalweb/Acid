/**
 * Checks if two numbers are the same.
 *
 * @function isNumberEqual
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked.
 * @param {number} target - Number to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumberEqual, assert } from 'Acid';
 * assert(isNumberEqual(0, 0), true);
 */
export function isNumberEqual(source, target) {
	return source === target;
}
