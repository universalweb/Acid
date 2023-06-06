/**
 * Checks if a number is within a range.
 *
 * @function isNumberNotInRange
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} start - Beginning of range.
 * @param {Number} end - End of range.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberNotInRange, assert } from 'Acid';
 * assert(isNumberNotInRange(1, 0, 2), false);
 * assert(isNumberNotInRange(1, 2, 5), true);
 */
export function isNumberNotInRange(source, start, end) {
	return source < start || source > end;
}
