import { eachObject } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { mapAsyncObject } from './mapAsync.js';
/**
 * Iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function mapObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function|undefined} - An object of the same calling object's type.
 *
 * @example
 * import { mapObject, assert } from '@universalweb/acid';
 * assert(mapObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, b: undefined, c: 3});
 */
export function mapObject(source, iteratee, results = {}, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	if (hasValue(thisCall)) {
		eachObject(source, (item, key, original, propertyCount, objectKeys) => {
			results[key] = iteratee.call(thisCall, item, key, results, original, propertyCount, objectKeys, additionalArg);
		});
	} else {
		eachObject(source, (item, key, original, propertyCount, objectKeys) => {
			results[key] = iteratee(item, key, results, original, propertyCount, objectKeys, additionalArg);
		});
	}
	return results;
}
