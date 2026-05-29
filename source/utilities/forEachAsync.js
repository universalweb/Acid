import { isPlainObject } from '../types/isPlainObject.js';
/**
 * Iterates the source with `forEach` to collect (value, key) pairs, then awaits the callback sequentially for each pair and stores the awaited return value. For Array/Set/Map sources returns an Array indexed in iteration order. For plain objects returns an object mapped by the original keys.
 *
 * @function forEachAsync
 * @category utility
 * @async
 * @type {Function}
 * @param {Array|Set|Map|Object} source - Source iterable supporting `.forEach` or a plain object.
 * @param {Function} callback - Async callback invoked with `(value, key, source)`. Its resolved value is captured.
 * @returns {Promise<Array|Object>} - Awaited results positioned by original index or keyed by original key.
 *
 * @example
 * import { forEachAsync, assert } from '@universalweb/acid';
 * const doubled = await forEachAsync([1, 2, 3], async (item) => item * 2);
 * assert(doubled, [2, 4, 6]);
 * const keyed = await forEachAsync({a: 1, b: 2}, async (item) => item + 10);
 * assert(keyed, {a: 11, b: 12});
 */
export async function forEachAsync(source, callback) {
	const sourceIsPlainObject = isPlainObject(source);
	const values = [];
	const keys = [];
	let collectedCount = 0;
	if (sourceIsPlainObject) {
		const sourceKeys = Object.keys(source);
		const sourceKeysLength = sourceKeys.length;
		for (let index = 0; index < sourceKeysLength; index++) {
			const key = sourceKeys[index];
			values[collectedCount] = source[key];
			keys[collectedCount] = key;
			collectedCount++;
		}
	} else {
		source.forEach((item, key) => {
			values[collectedCount] = item;
			keys[collectedCount] = key;
			collectedCount++;
		});
	}
	if (sourceIsPlainObject) {
		const keyedResults = {};
		for (let index = 0; index < collectedCount; index++) {
			keyedResults[keys[index]] = await callback(values[index], keys[index], source);
		}
		return keyedResults;
	}
	const results = new Array(collectedCount);
	for (let index = 0; index < collectedCount; index++) {
		results[index] = await callback(values[index], keys[index], source);
	}
	return results;
}
