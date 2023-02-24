import { eachAsyncArray } from '../array/eachAsync.js';
import { keys } from '../object/keys.js';
/**
 * Asynchronously iterates through the given object.
 *
 * @function eachObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @returns {Object|Function} - Returns source.
 *
 * @test
 * (async () => {
 *   const tempList = {};
 *   await eachObjectAsync({a: 1, b: 2, c: 3}, async (item, key) => {
 *     tempList[key] = item;
 *   });
 *   return assert(tempList, {a: 1, b: 2, c: 3});
 * });
 *
 * @example
 * eachObjectAsync({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * });
 * // => {a: 1, b: 2, c: 3}
 */
export const eachObjectAsync = async (source, iteratee) => {
	const objectKeys = keys(source);
	await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, objectKeys);
	});
	return source;
};

