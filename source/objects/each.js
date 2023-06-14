import { keys } from './keys.js';
import { eachArray } from '../arrays/each.js';
/**
 * Iterates through the given object.
 *
 * @function eachObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @returns {Object|Function} - Returns the calling object.
 *
 * @example
 * import { eachObject, assert } from '@universalweb/acid';
 * assert(eachObject({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * }), {a: 1, b: 2, c: 3});
 */
export function eachObject(source, iteratee) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	return eachArray(objectKeys, (key, index, original, propertyCount) => {
		iteratee(source[key], key, source, propertyCount, original);
	});
}
