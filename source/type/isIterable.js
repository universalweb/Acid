import { hasValue } from './hasValue.js';
/**
 * Checks if an object is an iterable. Checks if the object has inherited properties from the built-in Iterator class and which implements the Symbol.iterator interface. Built-in Iterators: String, Array, TypedArray, Map, Set, and Segments.
 *
 * @function isIterable
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isIterable, assert } from 'Acid';
 * assert(isIterable([]), true);
 * assert(isIterable(new Int8Array()), true);
 * assert(isIterable('test'), false);
 */
const typedArrayRegex = /Array/;
const arrayConstructorName = 'Array';
export function isIterable(source) {
	return hasValue(source) && typeof source[Symbol.iterator] === 'function';
}
