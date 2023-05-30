import { eachAsyncArray } from '../arrays/eachAsync.js';
import { keys } from './keys.js';
/**
 * Asynchronously iterates through the given object.
 *
 * @function eachAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @returns {Object|Function} - Returns source.
 *
 * @example
 * import { eachAsyncObject, assert } from 'Acid';
 * const tempList = [];
 * await eachAsyncObject({a: 1, b: 2, c: 3}, async (item, key) => {
 *     tempList[key] = item;
 *   });
 * assert(tempList, {a: 1, b: 2, c: 3});
 */
export const eachAsyncObject = async (source, iteratee) => {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, objectKeys);
	});
	return source;
};

