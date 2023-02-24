/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean } from './Acid.js';
 * isBoolean(true);
 * // => true
*/
export function isBoolean(value) {
	return value.constructor.name === 'Boolean';
}
