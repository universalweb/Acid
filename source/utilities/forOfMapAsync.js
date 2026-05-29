import { cloneType } from '../types/cloneType.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isGenerator } from '../types/isGenerator.js';
import { isSet } from '../types/isSet.js';
import { returnValue } from './returnValue.js';
/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfMapAsync
 * @category utility
 * @type {Function}
 * @param {Map|Set|Array} source - Iterable that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, and calling object.
 * @param {Map|Set|Array} resultsObject - Object that will be used to assign results.
 * @returns {Map|Set|Array} - An object with the mapped values.
 *
 * @example
 * import { forOfMapAsync, assert } from '@universalweb/acid';
 * assert(await forOfMapAsync([1, 2, 3], async (item) => item * 2), [2, 4, 6]);
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
		const isSetResults = isSet(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			if (isSetResults) {
				results.add(result);
			} else {
				results.push(result);
			}
		}
		return results;
	}
	const hasSetMethod = isFunction(results.set);
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (hasSetMethod) {
			results.set(key, result);
		} else {
			results[key] = result;
		}
	}
	return results;
}
