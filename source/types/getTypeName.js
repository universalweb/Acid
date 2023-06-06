import { getType } from './getType.js';
/**
 * Returns the constructor name of an object.
 *
 * @function getTypeName
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { getTypeName, assert } from 'Acid';
 * assert(getTypeName(1), true);
 */
export function getTypeName(source) {
	return getType(source)?.name;
}
