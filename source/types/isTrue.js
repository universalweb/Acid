/**
 * Check if a value equals true using strict comparison.
 *
 * @function isTrue
 * @category Utility
 * @type {Function}
 * @param {Boolean} source - Item to check.
 * @returns {Boolean} - Returns true if the item is true.
 *
 * @example
 * import { isTrue, assert } from '@universalweb/acid';
 * assert(isTrue(1), false);
 * assert(isTrue(true), true);
 * assert(isTrue(false), false);
 */
export function isTrue(source) {
	return source === true;
}
