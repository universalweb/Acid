/**
 * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
 *
 * @function eachAsyncArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @returns {Array} - Returns source the originally given array.
 *
 * @example
 * import { eachAsyncArray, assert } from 'Acid';
 * const tempList = [];
 * await eachAsyncArray([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [1, 2, 3]);
 */
export async function eachAsyncArray(source, iteratee) {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		await iteratee(source[index], index, source, arrayLength);
	}
	return source;
}

