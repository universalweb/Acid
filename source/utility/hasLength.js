/**
 * Checks if the value has length greater than 0.
 *
 * @function hasLength
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasLength([1]);
 * // => true
*/
export function hasLength(value) {
	return Boolean(value.length);
}
