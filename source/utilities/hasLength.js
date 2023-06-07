import { isUndefined } from '../types/isUndefined.js';
/**
 * Checks if the value has length greater than 0.
 *
 * @function hasLength
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { hasLength, assert } from '@universalweb/acid';
 * assert(hasLength([1]), true);
 */
export function hasLength(source) {
	return Boolean(source.length);
}
