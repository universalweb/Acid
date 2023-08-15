import { returnValue } from './returnValue.js';
import { cloneType } from '../types/cloneType.js';
import { isFunction } from '../types/isFunction.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isGenerator } from '../types/isGenerator.js';
import { isSet } from '../types/isSet.js';
import { isArray } from '../types/isArray.js';
/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMapAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { forOfCompactMapAsync, assert } from '@universalweb/acid';
 * assert(forOfCompactMapAsync({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * }), {b: 2, c: 3});
 */
export async function forOfMapAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			resultsGenerator.push(await iteratee(item, resultsGenerator, source));
		}
		return resultsGenerator;
	}
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			methodPushBound(result);
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (methodSet) {
			results.set(key, result);
		} else {
			results[key] = result;
		}
	}
	return results;
}
