import { eachAsyncObject } from './eachAsync.js';
import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
/**
 * Asynchronously iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * compactMapAsyncObject({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
export async function compactMapAsyncObject(source, iteratee = returnValue, results = {}) {
	await eachAsyncObject(source, async (item, key, original, propertyCount, objectKeys) => {
		const result = await iteratee(item, key, results, original, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
}
