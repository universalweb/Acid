/**
 * A function which acts like the "new" operator and can pass arguments. This is a safe version of the original which will error if given undefined
 * This is useful when working with classes and prefering to avoid the new operator and it's potential side effects.
 *
 * @function construct
 * @category class
 * @param {Function} target - The target function or class.
 * @param {Array} [argumentsList =[]] - An array-like object specifying the arguments with which target should be called. Default value is a new empty array.
 * @param {Array} newTarget - The constructor whose prototype should be used. See also the new.target operator. If newTarget is not present, its value defaults to target.
 * @returns {*} - A new instance of target (or newTarget, if present), initialized by target as a constructor with the given argumentsList.
 *
 * @example
 * import { construct, assert } from '@universalweb/acid';
 * class test {
 * constructor(a) {
 * return 1;
 * }
 * }
 * const newClass = construct(test, [1]);
 * assert(test, 1);
 */
const reflectConstruct = Reflect.construct;
import { isArray } from '../types/isArray.js';
export function construct(target, argumentsList = [], newTarget) {
	const args = (isArray(argumentsList)) ? argumentsList : [argumentsList];
	if (newTarget) {
		return reflectConstruct(target, args, newTarget);
	}
	return reflectConstruct(target, args);
}
