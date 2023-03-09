/**
 * Checks if the value is null.
 *
 * @function isNull
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNull } from 'Acid';
 * isNull(null);
 * // => true
 */
export function isNull(value) {
	return value === null;
}
