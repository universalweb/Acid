/**
 * Returns the constructor of an object.
 *
 * @function getType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { getType, assert } from '@universalweb/acid';
 * assert(getType(1), true);
 */
export function getType(source) {
	return source?.constructor;
}
