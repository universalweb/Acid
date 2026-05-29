/**
 * Checks if the value is a finite, non-integer number (i.e. Has a fractional component)..
 *
 * @function isFloat
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFloat, assert } from '@universalweb/acid';
 * assert(isFloat(1.01), true);
 * assert(isFloat(1), false);
 */
export function isFloat(source) {
	return Number.isFinite(source) && !Number.isInteger(source);
}
