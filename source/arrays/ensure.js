import { isArray } from '../types/isArray.js';
import { hasValue } from '../types/hasValue.js';
/**
 * Ensures the source is an array if not the source is wrapped in a array or an empty array is returned.
 *
 * @function ensureArray
 * @category array
 * @type {Function}
 * @param {*} source - Object to be checked.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { isArray, ensureArray, assert } from '@universalweb/acid';
 * assert(isArray(ensureArray('test')), ['test']);
 */
export function ensureArray(source) {
	return (isArray(source) && source) || (hasValue(source) && [source]) || [];
}

