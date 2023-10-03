import { hasValue } from '../types/hasValue.js';
export const objectEntries = Object.entries;
/**
 * Return turns an array of arrays of key & value pairs. The first element in each key & value pair is the property key, and the second element is the associated value. If source is null or undefined it will not crash or error.
 *
 * @function getEntries
 * @category object
 * @param {Object} source - The source object.
 * @returns {Array} - Returns the Object.entries of the source object.
 *
 * @example
 * import { getEntries, assert } from '@universalweb/acid';
 * assert(getEntries({b: 2, a: 1}), [['b', 2],['a', 1]]);
 */
export function getEntries(source) {
	if (hasValue(source)) {
		return objectEntries(source);
	}
}
