/**
 * Asynchronously Iterates through the given array in reverse. Each async function is awaited as to ensure synchronous order.
 *
 * @function eachRightAsync
 * @category array
 * @type {Function}
 * @async
 * @param {Array} callingArray - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { eachRightAsync, assert } from 'Acid';
 * const tempList = [];
 * await eachRightAsync([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
export async function eachRightAsync(callingArray, iteratee) {
	const arrayLength = callingArray.length;
	for (let index = arrayLength - 1; index >= 0; index--) {
		await iteratee(callingArray[index], index, callingArray, arrayLength);
	}
	return callingArray;
}
