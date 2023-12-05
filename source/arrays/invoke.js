import { hasValue } from '../types/hasValue.js';
/**
 * Invoke each function in the given array.
 *
 * @function invokeArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, array length, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { invokeArray, assert } from '@universalweb/acid';
 * function test(arg){
 * 	return [this, arg];
 * }
 * const results = invokeArray([test], 1, test);
 * assert(results, [test, 1]);
 */
export function invokeArray(source, arg, thisCall) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			source[index].call(thisCall, arg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			source[index](arg);
		}
	}
	return source;
}

