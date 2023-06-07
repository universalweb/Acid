import { eachObject } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { returnValue } from '../utilities/returnValue.js';
import { mapAsyncObject } from './mapAsync.js';
import { compactMapAsyncObject } from './compactMapAsync.js';
/**
 * Iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapObject, assert } from '@universalweb/acid';
 * assert(compactMapObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, c: 3});
 */
export function compactMapObject(source, iteratee = returnValue, results = {}) {
	eachObject(source, (item, key, original, propertyCount, objectKeys) => {
		const result = iteratee(item, key, results, original, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
}
