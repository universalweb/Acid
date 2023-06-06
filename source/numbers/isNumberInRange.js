/**
 * Checks if a number is within a range.
 *
 * @function isNumberInRange
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} start - Beginning of range.
 * @param {Number} end - End of range.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberInRange, assert } from 'Acid';
 * assert(isNumberInRange(1, 0, 2), true);
 * assert(isNumberInRange(1, 2, 5), false);
 */
export function isNumberInRange(source, start, end) {
	return source > start && source < end;
}
