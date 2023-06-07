import { hasValue } from './hasValue.js';
/**
 * Checks if the object has inherited properties from the built-in Iterator class and which implements the Symbol.iterator interface. Built-in Iterators: String, Array, TypedArray, Map, Set, and Segments.
 *
 * @function isIterable
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isIterable, assert } from '@universalweb/acid';
 * assert(isIterable([]), true);
 * assert(isIterable(new Int8Array()), true);
 * assert(isIterable('test'), false);
 */
export function isIterable(source) {
	return hasValue(source) && typeof source[Symbol.iterator] === 'function';
}
