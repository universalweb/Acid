/**
 * Subtracts the subtrahend (first argument) from the minuend (second argument). The arguments are reversed compared to the subtract function.
 *
 * @function subtractReverse
 * @category math
 * @type {Function}
 * @param {Number} subtrahend - The subtrahend.
 * @param {Number} minuend - The minuend.
 * @returns {Number} - Returns the difference.
 *
 * @example
 * import { subtractReverse, assert } from '@universalweb/acid';
 * assert(subtractReverse(1, 3), 2);
 */
export function subtractReverse(subtrahend, minuend) {
	return minuend - subtrahend;
}
