/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function inAsync
 * @type {Function}
 * @category Array
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * Functions are given the supplied object, index, the calling array, and the array length.
 * @param {*} firstArgument - The first argument given to each function.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { inAsync, assert } from 'Acid';
 * const list = [];
 * await inAsync([async (firstArgument, item, index) => {
 *   list.push(index + firstArgument.a);
 * }, async (firstArgument, item, index) => {
 *   list.push(index);
 * }], {a:1});
 * assert(list, [1, 1]);
 */
export async function inAsync(source, firstArgument) {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		const method = source[index];
		await method(firstArgument, index, source, arrayLength);
	}
	return source;
}

