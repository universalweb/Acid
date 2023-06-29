import { eachObject } from './each';
const objectAssign = Object.assign;
/**
 * Copy the values (which are not undefined or null) of all enumerable own properties from one or more source objects to a new object. It will return a new object.
 *
 * @function assimilate
 * @category object
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { assimilate, assert } from '@universalweb/acid';
 * assert(assimilate({b: 2}, {a: 1}), {b: 2, a: 1});
 */
export function assimilate(...sources) {
	const target = {};
	eachObject();
}
