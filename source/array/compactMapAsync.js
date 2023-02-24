import { eachAsyncArray } from './eachAsync.js';
import { returnValue } from '../utility/returnValue.js';
import { hasValue } from '../type/hasValue.js';
/**
 * Asynchronously iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
 *
 * @function compactMapAsync
 * @type {Function}
 * @category array
 * @async
 * @param {Array} source - Array to be compacted.
 * @param {Function} iteratee - Iteratee to be performed on array.
 * @returns {Array} - Array values after being put through an iterator.
 *
 * @example
 * import { compactMapAsync, assert } from './Acid.js';
 * assert(await compactMapAsync([1, 2, 3, null], async (item) => {
 *   return item;
 * }), [1, 2, 3]);
 */
export async function compactMapAsync(source, iteratee = returnValue) {
	const results = [];
	await eachAsyncArray(source, async (item, index, arrayLength) => {
		const result = await iteratee(item, index, results, arrayLength);
		if (hasValue(result)) {
			results.push(result);
		}
	});
	return results;
}

