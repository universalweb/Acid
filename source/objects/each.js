import { eachArray } from '../arrays/each.js';
import { hasValue } from '../types/hasValue.js';
import { keys } from './keys.js';
/**
 * Iterates through the given object.
 *
 * @function eachObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function|undefined} - Returns the calling object.
 *
 * @example
 * import { eachObject, assert } from '@universalweb/acid';
 * assert(eachObject({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * }), {a: 1, b: 2, c: 3});
 */
export function eachObject(source, iteratee, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	if (hasValue(thisCall)) {
		eachArray(objectKeys, (key, index, objectKeysArray, propertyCount) => {
			iteratee.call(thisCall, source[key], key, source, propertyCount, objectKeysArray, additionalArg);
		});
	} else {
		eachArray(objectKeys, (key, index, objectKeysArray, propertyCount) => {
			iteratee(source[key], key, source, propertyCount, objectKeysArray, additionalArg);
		});
	}
	return source;
}

