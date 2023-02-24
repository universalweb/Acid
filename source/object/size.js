import { keys } from './keys.js';
/**
 * Returns the amount of keys on the object.
 *
 * @function objectSize
 * @category object
 * @param {Object} source - The source object.
 * @returns {number} - The amount of keys.
 *
 * @example
 * objectSize({ 0: 'a', 1: 'b', 2: 'c' });
 * // => 3
*/
export function objectSize(source) {
	return keys(source).length;
}
