/**
 * Returns the constructor of an object.
 *
 * @function getType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Function|undefined} - Returns the constructor or undefined for null/undefined.
 *
 * @example
 * import { getType, assert } from '@universalweb/acid';
 * assert(getType(1), Number);
 */
export function getType(source) {
	return source?.constructor;
}
export { getType as getConstructor };
