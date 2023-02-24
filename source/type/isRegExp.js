/**
 * Checks if the value is a RegExp.
 *
 * @function isRegExp
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRegExp } from './Acid.js';
 * isRegExp(/test/);
 * // => true
*/
export function isRegExp(value) {
	return value instanceof RegExp;
}
