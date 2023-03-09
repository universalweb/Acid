import { eachAsyncObject } from './eachAsync.js';
import { hasValue } from '../type/hasValue.js';
/**
 * Asynchronously iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function mapObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object of the same calling object's type.
 *
 * @example
 * mapObjectAsync({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * });
 * // => {a: 2, b: 4, c: 6}
 */
export const mapObjectAsync = async (source, iteratee, results = {}) => {
	await eachAsyncObject(source, async (item, key, thisObject, propertyCount, objectKeys) => {
		results[key] = await iteratee(item, key, results, thisObject, propertyCount, objectKeys);
	});
	return results;
};
/**
 * Asynchronously iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * compactMapObjectAsync({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
export const compactMapObjectAsync = async (source, iteratee, results = {}) => {
	await eachAsyncObject(source, async (item, key, thisObject, propertyCount, objectKeys) => {
		const result = await iteratee(item, key, results, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
};

