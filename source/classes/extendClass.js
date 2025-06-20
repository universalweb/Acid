import { isFunction } from '../types/isFunction.js';
import { isNumber } from '../types/isNumber.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isString } from '../types/isString.js';
import { isType } from '../types/isType.js';
import { objectAssign } from '../objects/assign.js';
export function assignToClass(target, source) {
	if (isPlainObject(source)) {
		objectAssign(target.prototype, source);
	} else if (isFunction(source)) {
		const key = source.name;
		if (key) {
			target.prototype[key] = source;
		}
	} else if (isType(source)) {
		const key = source.constructor?.name;
		if (key) {
			target.prototype[key] = source;
		}
	} else if (isString(source) || isNumber(source)) {
		target.prototype[source] = source;
	}
	return target;
}
/**
 * The function adds a new method to a class.
 * @param {Class} target - The target parameter refers to the Class or constructor function to which you want
 * to add a new method.
 * @param {Function|Object|String|Number} sources - What you want to add to the class.
 * @returns {Class} - Returns the Class provided in the target parameter.
 *
 * @example
 * import { extendClass, assert } from '@universalweb/acid';
 * class Test {}
 * function a(){return 1;}
 * extendClass(Test, a)
 * assert((new Test()).a(), 1);
 */
export function extendClass(target, ...sources) {
	const sourceLength = sources.length;
	for (let index = 0; index < sourceLength; index++) {
		assignToClass(target, sources[index]);
	}
	return target;
}
