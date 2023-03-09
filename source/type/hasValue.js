import { isUndefined } from './isUndefined.js';
import { isNull } from './isNull.js';
/**
 * Checks if the value is not null or undefined.
 *
 * @function hasValue
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasValue } from 'Acid';
 * assert(hasValue(1), true);
 */
export function hasValue(value) {
	return !isUndefined(value) && !isNull(value);
}
