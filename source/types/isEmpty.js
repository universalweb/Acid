import { isString } from './isString.js';
import { isArray } from './isArray.js';
import { isPlainObject } from './isPlainObject.js';
import { hasLength } from '../utilities/hasLength.js';
import { objectSize } from '../objects/size.js';
import { hasValue } from './hasValue.js';
/**
 * Checks if the value is empty.
 *
 * @function isEmpty
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEmpty } from 'Acid';
 * isEmpty([]);
 * // => true
 */
export function isEmpty(source) {
	if (isString(source) || isArray(source)) {
		return !hasLength(source);
	} else if (isPlainObject(source)) {
		return !objectSize(source);
	}
	return !hasValue(source);
}
