/**
 * Checks if the value is an array. This references Array.isArray.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from '@universalweb/acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
export const isArray = Array.isArray;
/**
 * Checks if the value is not an array. This references Array.isArray.
 *
 * @function isNotArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotArray, assert } from '@universalweb/acid';
 * assert(isNotArray([]), false);
 * assert(isNotArray(2), true);
 */
export function isNotArray(source) {
	return !isArray(source);
}
