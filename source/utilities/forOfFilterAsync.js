import { cloneType } from '../types/cloneType.js';
import { hasValue } from '../types/hasValue.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isGenerator } from '../types/isGenerator.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isSet } from '../types/isSet.js';
import { returnValue } from './returnValue.js';
/**
 * Asynchronously iterates (for of)through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function forOfFilterAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties.
 *
 * @example
 * import { assert, forOfFilterAsync } from '@universalweb/acid';
 * const source = {a: undefined, b: 2, c: 3};
 * const temp = forOfFilterAsync(source, (item) => {
 *   return Boolean(item);
 * });
 * assert(temp, {b: 2, c: 3});
 */
export async function forOfFilterAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			if (await iteratee(item, resultsGenerator, source) === true) {
				resultsGenerator.push(item);
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
			if (result === true) {
				methodPushBound(value);
			}
		}
	} else {
		const methodSet = isFunction(results.set);
		for await (const [key, value] of source) {
			const result = await iteratee(value, key, results, source);
			if (result === true) {
				if (methodSet) {
					results.set(key, value);
				} else {
					results[key] = value;
				}
			}
		}
	}
	return results;
}
