import { isNumber } from './isNumber.js';
import { noValue } from './noValue.js';
import { isFunction } from './isFunction.js';
import { hasProp } from '../internal/object.js';
import { everyArray } from '../array/every.js';
/**
 * Checks if an object has a .length property that's greater than or equal to 0 & is not a function. If strict is enabled it will check to see if there is an item returned in range of the number returned bu the length property.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @param {*} strictFlag - Strict flag to also check to see if keys are whole intigers greater than or equal to 0.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from 'Acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
export function isArrayLike(source, strictFlag) {
	if (noValue(source) || isFunction(source)) {
		return false;
	}
	const sourceLength = source.length;
	if (!sourceLength || !isNumber(sourceLength) || sourceLength < 0) {
		return false;
	}
	if (strictFlag) {
		return everyArray(source, (value, index) => {
			return index >= 0 && isNumber(index);
		});
	}
	return false;
}
