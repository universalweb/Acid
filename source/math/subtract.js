/**
 * Subtracts the subtrahend (second argument) from the minuend (first argument).
 *
 * @function subtract
 * @category math
 * @type {Function}
 * @param {Number} minuend - The minuend.
 * @param {Number} subtrahend - The subtrahend.
 * @returns {Number} - Returns the difference.
 *
 * @example
 * import { subtract, assert } from '@universalweb/acid';
 * assert(subtract(3, 1), 2);
 */
export function subtract(minuend, subtrahend) {
	return minuend - subtrahend;
}
