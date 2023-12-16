import { hasValue } from '../types/hasValue.js';
const arrayFrom = Array.from;
/**
 * The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. This just has a null & undefined safety check.
 *
 * @function toArray
 * @category array
 * @param {*} arrayLike - Array like object.
 * @param {Function} mapFn - Function to map over the array.
 * @param {*} thisArg - MapFn's "this".
 * @returns {Array|undefined} - New array.
 *
 * @example
 * import { toArray, assert } from '@universalweb/acid';
 * assert(toArray(new Map([[1, 2]])), [[1, 2]]);
 */
export function toArray(arrayLike, mapFn, thisArg) {
	if (hasValue(arrayLike)) {
		return arrayFrom(arrayLike, mapFn, thisArg);
	}
}
