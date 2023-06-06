import { isUndefined } from './isUndefined.js';
import { isNull } from './isNull.js';
/**
 * Checks if the value is not null or undefined.
 *
 * @function hasValue
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { hasValue, assert } from 'Acid';
 * assert(hasValue(1), true);
 */
export function hasValue(source) {
	return !isUndefined(source) && !isNull(source);
}
