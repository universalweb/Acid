import { hasValue } from '../types/hasValue.js';
export const objectAssign = Object.assign;
/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
 *
 * @function assign
 * @category object
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { assign, assert } from '@universalweb/acid';
 * assert(assign({b: 2}, {a: 1}), {b: 2, a: 1});
 */
export function assign(target, ...sources) {
	if (hasValue(target)) {
		return objectAssign(target, ...sources);
	}
}
