import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function everyObject
 * @category object
 * @type {Function}
 * @param {Object} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * everyObject({a: true, b: true, c: true}, (item) => {
 *   return item;
 * });
 * // => true
 */
export function everyObject(source, iteratee) {
	const objectKeys = keys(source);
	return everyArray(objectKeys, (key, index, original, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, original);
	});
}