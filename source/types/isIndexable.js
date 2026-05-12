import { isArray } from './isArray.js';
import { isArrayLike } from './isArrayLike.js';
import { isString } from './isString.js';
import { isTypedArray } from './isTypedArray.js';
/**
 * Checks if the value can be accessed by integer indexes (Array, TypedArray, String, or array-like).
 *
 * @function isIndexable
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isIndexable, assert } from '@universalweb/acid';
 * assert(isIndexable([1, 2]), true);
 * assert(isIndexable('abc'), true);
 * assert(isIndexable({}), false);
 */
export function isIndexable(source) {
	return isArray(source) || isTypedArray(source) || isString(source) || isArrayLike(source);
}
