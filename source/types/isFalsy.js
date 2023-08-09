/**
 * Check if a value is isFalsy which are false, null, 0, "", undefined, and NaN.
 *
 * @function isFalsy
 * @category type
 * @type {Function}
 * @param {*} source - Item to be isFalsy checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is isFalsy.
 * @returns {Boolean|*} - Returns true if the item is isFalsy or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { isFalsy, assert } from '@universalweb/acid';
 * assert(isFalsy(0), true);
 * assert(isFalsy(1), false);
 */
export function isFalsy(source, returnIfTrue = true) {
	return Boolean(source) === false && returnIfTrue;
}
