/**
 * Decrements a number.
 *
 * @function deduct
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @returns {Number} - Returns a decremented version of the number.
 *
 * @example
 * import { deduct, assert } from '@universalweb/acid';
 * assert(deduct(10), 9);
 */
export function deduct(source) {
	return source - 1;
}
