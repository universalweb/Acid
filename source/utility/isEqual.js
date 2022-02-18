import namespace from '../namespace/index';
import { hasKeys } from '../object/hasKeys.js';
import { whileArray } from '../array/each';
import { assign, keys } from '../internal/object';
import { isArray, isPlainObject } from '../internal/is';
/**
   * Performs a deep comparison between two objects.
   *
   * @function isEqual
   * @type {Function}
   * @category utility
   * @param {Object} source - Source object.
   * @param {Object} compareObject - Object to compare to source.
   * @returns {boolean} - Returns true or false.
   *
   * @example
   * isEqual({a: [1,2,3]}, {a: [1,2,3]});
   * // => true
 */
export const isEqual = (source, compareObject) => {
	if (source === compareObject) {
		return true;
	} else if (source.toString() === compareObject.toString()) {
		if (isPlainObject(source)) {
			const sourceProperties = keys(source);
			if (hasKeys(compareObject, sourceProperties)) {
				return whileArray(sourceProperties, (key) => {
					return isEqual(source[key], compareObject[key]);
				});
			}
		} else if (isArray(source)) {
			if (source.length === compareObject.length) {
				return whileArray(source, (item, index) => {
					return isEqual(item, compareObject[index]);
				});
			}
		}
	}
	return false;
};
assign(namespace, {
	isEqual,
});
