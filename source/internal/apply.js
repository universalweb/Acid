const applyNative = Reflect.apply;
import { hasValue } from '../types/hasValue.js';
import { isFunction } from '../types/isFunction.js';
/**
 * Calls a target function with an optional "this" and optional arguments as specified. Same as Reflect.apply but with a function check.
 *
 * @function apply
 * @category function
 * @param {Function} target - The target function to call.
 * @param {*} thisArgument - Array like object.
 * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
 * @returns {*} - The result of calling the given target function with the specified this value and arguments.
 *
 * @example
 * import { apply, assert } from '@universalweb/acid';
 * assert(apply(function (a) {return a;}, undefined, [2]), 2);
 */
export function apply(target, thisArgument, argumentsList) {
	if (isFunction(target)) {
		return applyNative(target, thisArgument, argumentsList);
	}
}
