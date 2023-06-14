import { keys } from './keys.js';
/**
 * Returns the amount of keys on the object.
 *
 * @function objectSize
 * @category object
 * @param {Object} source - The source object.
 * @returns {Number} - The amount of keys.
 *
 * @example
 * objectSize({ 0: 'a', 1: 'b', 2: 'c' });
 * // => 3
*/
export function objectSize(source) {
	if (!source) {
		return;
	}
	return keys(source).length;
}