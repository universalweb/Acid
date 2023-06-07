/**
 * Check if a value equals false using strict comparison.
 *
 * @function isFalse
 * @category Utility
 * @type {Function}
 * @param {Boolean} source - Item to compare.
 * @returns {Boolean} - Returns true if the item equals false.
 *
 * @example
 * import { isFalse, assert } from '@universalweb/acid';
 * assert(isFalse(1), false);
 * assert(isFalse(true), false);
 * assert(isFalse(false), true);
 */
export function isFalse(source) {
	return source === false;
}
