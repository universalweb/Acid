import { hasValue } from './hasValue.js';
/**
 * Checks if the source is a WeakMap.
 *
 * @function isWeakMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isWeakMap } from 'Acid';
 * assert(isWeakMap(new WeakMap()), true);
 */
const objectWeakMap = '[object WeakMap]';
export function isWeakMap(source) {
	return (hasValue(source)) ? source.toString() === objectWeakMap : false;
}
