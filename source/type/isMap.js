import { hasValue } from './hasValue.js';
/**
 * Checks if the source is a Map.
 *
 * @function isMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isMap } from 'Acid';
 * isMap(new Map());
 * // => true
 */
const objectMap = '[object Map]';
export function isMap(source) {
	return (hasValue(source)) ? source.toString() === objectMap : false;
}
