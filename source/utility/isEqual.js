import { hasKeys } from '../object/hasKeys.js';
import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
/**
 * Performs a deep comparison between two objects & determines if the value is the same using strict comparison.
 *
 * @function isEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isEqual, assert } from 'Acid';
 * assert(isEqual({a: [1,2,3]}, {a: [1,2,3]}), true);
 */
// Add map & buffer Support
export const isEqual = (source, target) => {
	if (source === target) {
		return true;
	} else if (source.toString() === target.toString()) {
		if (isPlainObject(source)) {
			const sourceProperties = keys(source);
			if (hasKeys(target, sourceProperties)) {
				return everyArray(sourceProperties, (key) => {
					return isEqual(source[key], target[key]);
				});
			}
		} else if (isArray(source)) {
			if (source.length === target.length) {
				return everyArray(source, (item, index) => {
					return isEqual(item, target[index]);
				});
			}
		}
	}
	return false;
};

