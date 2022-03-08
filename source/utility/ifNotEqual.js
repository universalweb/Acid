import { hasValue } from '../internal/is';
/**
   * Checks if a property on an object has a value. If not, it will assign a value.
   *
   * @function ifNotEqual
   * @category utility
   * @type {Function}
   * @param {Object} rootObject - The object to check.
   * @param {string} property - The property name which is to be checked.
   * @param {*} equalThis - The reassignment value for the property being checked.
   * @returns {Object} - Returns the provided rootObject.
   *
   * @example
   * ifNotEqual({}, 'a', 1);
   * // => {a:1}
 */
export const ifNotEqual = (rootObject, property, equalThis) => {
	if (property && !hasValue(rootObject[property])) {
		rootObject[property] = equalThis;
	}
	return rootObject;
};

