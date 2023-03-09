/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isDate } from 'Acid';
 * isDate(new Date());
 * // => true
 */
export function isDate(value) {
	return value instanceof Date;
}
