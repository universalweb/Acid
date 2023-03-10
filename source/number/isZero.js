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
 * import { stubArray } from 'Acid';
 * isZero(0);
 * // => true
 * isZero(1);
 * // => false
 */
export const isZero = (source) => {
	return source === 0;
};
