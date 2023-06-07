import { everyAsyncArray } from '../arrays/everyAsync.js';
import { keys } from './keys.js';
import { each } from '../utilities/each.js';
/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function everyAsyncObject
 * @category object
 * @type {Function}
 * @param {Object} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { everyAsyncObject, assert } from '@universalweb/acid';
 * const result =  await everyAsyncObject({a: true, b: true, c: true}, (item) => {
 *   return item;
 * });
 * assert(result, true);
 */
export async function everyAsyncObject(source, iteratee) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	return everyAsyncArray(objectKeys, (key, index, original, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, original);
	});
}
