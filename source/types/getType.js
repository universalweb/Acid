/**
 * Returns the constructor of an object.
 *
 * @function getType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { getType, assert } from 'Acid';
 * assert(getType(1), true);
 */
export function getType(source) {
	return source?.constructor;
}
