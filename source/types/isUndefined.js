/** Checks if the value is undefined.
 *
 * @function isUndefined
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isUndefined, assert } from '@universalweb/acid';
 * assert(isUndefined(undefined), true);
 */
export function isUndefined(source) {
	return source === undefined;
}
