/** Checks if the value is undefined.
 *
 * @function isUndefined
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isUndefined, assert } from 'Acid';
 * assert(isUndefined(undefined), true);
 */
export function isUndefined(source) {
	return source === undefined;
}
