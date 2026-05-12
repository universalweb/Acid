import { getType } from './getType.js';
/**
 * Returns the constructor name of an object.
 *
 * @function getTypeName
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {String|undefined} - Returns the constructor name or undefined for null/undefined.
 *
 * @example
 * import { getTypeName, assert } from '@universalweb/acid';
 * assert(getTypeName(1), 'Number');
 */
export function getTypeName(source) {
	return getType(source)?.name;
}
export { getTypeName as getConstructorName };
