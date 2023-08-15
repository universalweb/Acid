import { hasValue } from '../types/hasValue.js';
/**
 * Checks if a property on an object has a value. If not, it will assign a value.
 *
 * @function ifNotAssign
 * @category utility
 * @type {Function}
 * @param {Object} rootObject - The object to check.
 * @param {String} property - The property name which is to be checked.
 * @param {*} equalThis - The reassignment value for the property being checked.
 * @returns {Object} - Returns the provided rootObject.
 *
 * @example
 * import { ifNotAssign, assert } from '@universalweb/acid';
 * assert(ifNotAssign({}, 'a', 1), {a:1});
 */
export const ifNotAssign = (rootObject, property, equalThis) => {
	if (property && !hasValue(rootObject[property])) {
		rootObject[property] = equalThis;
	}
	return rootObject;
};

