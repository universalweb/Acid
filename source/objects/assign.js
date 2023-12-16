import { extendClass } from '../classes/extendClass.js';
import { hasValue } from '../types/hasValue.js';
import { isFunction } from '../types/isFunction.js';
import { isNumber } from '../types/isNumber.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isString } from '../types/isString.js';
export const objectAssign = Object.assign;
export function assignToObject(target, source) {
	if (isPlainObject(source)) {
		objectAssign(target, source);
	} else if (isFunction(source)) {
		const key = source.name;
		if (key) {
			target[key] = source;
		} else {
			objectAssign(target, source);
		}
	} else if (isString(source) || isNumber(source)) {
		target[source] = source;
	}
	return target;
}
/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object. However, if an object is a function it will try and use its name as the key and the function itself as the value to assign to the target object. If it's a function without a name then it will do a straight object assign. It will do the same for strings and numbers except that it will use for both the key and the value the provided string or number. It will return the target object. If a raw object.assign is needed just import objectAssign from this module.
 *
 * @function assign
 * @category object
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { assign, assert } from '@universalweb/acid';
 * assert(assign({a: 1}, {b: 2}, function c() { return 3; }, 'd', 5), {a: 1, b: 2, c, d: 'd', 5: 5});
 */
export function assign(target, ...sources) {
	const sourceLength = sources.length;
	for (let index = 0; index < sourceLength; index++) {
		assignToObject(target, sources[index]);
	}
	return target;
}
