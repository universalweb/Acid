import { isNumber } from './isNumber.js';
import { hasValue } from './hasValue.js';
/**
 * Checks if an object has a .length property that's greater than or equal to 0 & is not a function. If strict is enabled it will check to see if there is an item returned in range of the number returned bu the length property.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @param {*} strictFlag - Strict flag to also check to see if items can be called using brackets.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from 'Acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
export function isArrayLike(source, strictFlag) {
	if (!hasValue()) {
	}
	const sourceLength = source.length;
	if (!sourceLength || !isNumber(sourceLength) || sourceLength < 0) {
		return false;
	}
	return false;
}
