/**
 * Checks if a number is within a range.
 *
 * @function isNumberNotInRange
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked.
 * @param {number} start - Beginning of range.
 * @param {number} end - End of range.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumberNotInRange, assert } from 'Acid';
 * assert(isNumberNotInRange(1, 0, 2), false);
 * assert(isNumberNotInRange(1, 2, 5), true);
 */
export function isNumberNotInRange(source, start, end) {
	return source < start || source > end;
}
