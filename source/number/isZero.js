/**
 * Strictly checks if a number is zero.
 *
 * @function isZero
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isZero, assert } from 'Acid';
 * assert(isZero(0), true);
 */
export function isZero(source) {
	return source === 0;
}
