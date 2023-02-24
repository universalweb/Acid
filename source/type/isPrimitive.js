/**
 * Checks if an object is a primitive.
 *
 * @function isPrimitive
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isPrimitive } from './Acid.js';
 * isPrimitive(1);
 * // => true
 * isPrimitive(() => {});
 * // => false
*/
export function isPrimitive(value) {
	const type = typeof value;
	return value === null || value === undefined || (type !== 'object' && type !== 'function');
}
