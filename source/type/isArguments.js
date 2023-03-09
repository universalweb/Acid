import { hasValue } from './hasValue.js';
/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArguments } from 'Acid';
 * isArguments([]);
 * // => false
 */
const objectArguments = '[object Arguments]';
export function isArguments(source) {
	return (hasValue(source)) ? source.toString() === objectArguments : false;
}
