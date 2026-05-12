import { hasValue } from '../types/hasValue.js';
/**
 * Invoke each function in the given array.
 *
 * @function invokeArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} additionalArg - An object to be given each time to the iteratee.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @returns {Array|undefined} - The originally given array.
 *
 * @example
 * import { invokeArray, assert } from '@universalweb/acid';
 * const collected = [];
 * function test(arg) { collected.push([this, arg]); }
 * invokeArray([test], 1, 'thisValue');
 * assert(collected, [['thisValue', 1]]);
 */
export function invokeArray(source, additionalArg, thisCall) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			source[index].call(thisCall, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			source[index](additionalArg);
		}
	}
	return source;
}

