import { hasKeys } from '../object/hasKeys.js';
import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
/**
 * Performs a deep comparison between two objects.
 *
 * @function isEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} compareObject - Object to compare to source.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isEqual, assert } from './Acid.js';
 * assert(isEqual({a: [1,2,3]}, {a: [1,2,3]}), true);
 */
// Add map & buffer Support
export const isEqual = (source, compareObject) => {
	if (source === compareObject) {
		return true;
	} else if (source.toString() === compareObject.toString()) {
		if (isPlainObject(source)) {
			const sourceProperties = keys(source);
			if (hasKeys(compareObject, sourceProperties)) {
				return everyArray(sourceProperties, (key) => {
					return isEqual(source[key], compareObject[key]);
				});
			}
		} else if (isArray(source)) {
			if (source.length === compareObject.length) {
				return everyArray(source, (item, index) => {
					return isEqual(item, compareObject[index]);
				});
			}
		}
	}
	return false;
};

