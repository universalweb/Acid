import { cloneType } from '../types/cloneType.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isGenerator } from '../types/isGenerator.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isSet } from '../types/isSet.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates through (using for of) the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function forOfMap
 * @category utility
 * @type {Function}
 * @param {Map|Set|Array} source - Iterable that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, and calling object.
 * @param {Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Map|Set|Array} - An object with mapped values.
 *
 * @example
 * import { forOfMap, assert } from '@universalweb/acid';
 * assert(forOfMap([1, 2, 3], (item) => item * 2), [2, 4, 6]);
 */
export function forOfMap(source, iteratee = returnValue, resultsObject) {
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = iteratee(value, results, source);
			methodPushBound(result);
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for (const [key, value] of source) {
		const result = iteratee(value, key, results, source);
		if (methodSet) {
			results.set(key, result);
		} else {
			results[key] = result;
		}
	}
	return results;
}
