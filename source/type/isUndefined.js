/** Checks if the value is undefined.
*
* @function isUndefined
* @category type
* @param {*} value - Object to be checked.
* @returns {boolean} - Returns true or false.
*
* @example
 * import { isUndefined } from './Acid.js';
* isUndefined(undefined);
* // => true
*/
export function isUndefined(value) {
	return value === undefined;
}
