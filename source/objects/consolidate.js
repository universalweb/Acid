import { eachObject } from './each.js';
const objectAssign = Object.assign;
/**
 * Copy the values (which are not undefined or null) of all enumerable own properties from one or more source objects to a new object. It will return a new object.
 *
 * @function consolidate
 * @category object
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { consolidate, assert } from '@universalweb/acid';
 * assert(consolidate({b: 2}, {a: 1}), {b: 2, a: 1});
 */
export function consolidate(...sources) {
	return objectAssign({}, ...sources);
}
