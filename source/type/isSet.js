import { hasValue } from './hasValue.js';
/**
 * Checks if the source is a Set.
 *
 * @function isSet
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isSet } from 'Acid';
 * isSet(new Set());
 * // => true
 */
const objectSet = '[object Set]';
export function isSet(source) {
	return (hasValue(source)) ? source.toString() === objectSet : false;
}
