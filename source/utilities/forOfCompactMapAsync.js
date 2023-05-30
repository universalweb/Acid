import { hasValue } from '../types/hasValue.js';
import { returnValue } from './returnValue.js';
import { cloneType } from '../types/cloneType.js';
import { isFunction } from '../types/isFunction.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isSet } from '../types/isSet.js';
import { isArray } from '../types/isArray.js';
import { isGenerator } from '../types/isGenerator.js';
/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMapAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { assert,forOfCompactMapAsync } from 'Acid';
 * const source = {a: undefined, b: 2, c: 3};
 * const temp = await forOfCompactMapAsync(source, async (item) => {
 *   return item;
 * });
 * assert(temp, {b: 2, c: 3});
 */
export async function forOfCompactMapAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			const result = await iteratee(item, resultsGenerator, source);
			if (hasValue(result)) {
				resultsGenerator.push(result);
			}
		}
		return resultsGenerator;
	}
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			if (hasValue(result)) {
				methodPushBound(result);
			}
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (hasValue(result)) {
			if (methodSet) {
				results.set(key, result);
			} else {
				results[key] = result;
			}
		}
	}
	return results;
}
