import { isNumber } from './isNumber.js';
import { noValue } from './noValue.js';
import { isFunction } from './isFunction.js';
import { hasProp } from '../internal/object.js';
import { every } from '../utilities/every.js';
import { keys } from '../objects/keys.js';
import { isArray } from './isArray.js';
import { isMap } from './isMap.js';
import { isTypedArray } from './isTypedArray.js';
/**
 * Checks if an object has a .length property that's greater than or equal to 0 & is not a function. If strict is enabled it will check to see if there is an item returned in range of the number returned bu the length property.
 *
 * @function isArrayLike
 * @category type
 * @param {*} source - Object to be checked.
 * @param {*} strictFlag - Strict flag to also check to see if keys are whole intigers greater than or equal to 0.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArrayLike, assert } from '@universalweb/acid';
 * assert(isArrayLike([]), true);
 * assert(isArrayLike(2), false);
 */
export function isArrayLike(source, strictFlag) {
	if (noValue(source) || isFunction(source)) {
		return false;
	}
	if (isArray(source) || isTypedArray(source)) {
		return true;
	}
	const sourceLength = source.length;
	if (!noValue(sourceLength) || !isNumber(sourceLength) || sourceLength < 0) {
		return false;
	}
	if (strictFlag) {
		const indexes = keys(source);
		if (indexes) {
			return every(indexes, (value, index) => {
				return index >= 0 && isNumber(index);
			});
		}
		return false;
	}
	return true;
}
