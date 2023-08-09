/**
 * Check if a value is isTruthy which is anything but false, null, 0, "", undefined, and NaN.
 *
 * @function isTruthy
 * @category type
 * @type {Function}
 * @param {*} source - Item to be isTruthy checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is isTruthy.
 * @returns {Boolean|*} - Returns true if the item is isTruthy or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { isTruthy, assert } from '@universalweb/acid';
 * assert(isTruthy(1), true);
 * assert(isTruthy(0), false);
 */
export function isTruthy(source, returnIfTrue = true) {
	return Boolean(source) && returnIfTrue;
}
