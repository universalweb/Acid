import { eachAsyncArray } from '../arrays/eachAsync.js';
import { keys } from './keys.js';
import { hasValue } from '../types/hasValue.js';
/**
 * Asynchronously iterates through the given object.
 *
 * @function eachAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, array of keys, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function} - Returns source.
 *
 * @example
 * import { eachAsyncObject, assert } from '@universalweb/acid';
 * const tempList = [];
 * await eachAsyncObject({a: 1, b: 2, c: 3}, async (item, key) => {
 *     tempList[key] = item;
 *   });
 * assert(tempList, {a: 1, b: 2, c: 3});
 */
export const eachAsyncObject = async (source, iteratee, thisCall, additionalArg) => {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	if (hasValue(thisCall)) {
		await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
			return iteratee.call(thisCall, source[key], key, source, propertyCount, objectKeys, additionalArg);
		});
	} else {
		await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
			return iteratee(source[key], key, source, propertyCount, objectKeys, additionalArg);
		});
	}
	return source;
};

