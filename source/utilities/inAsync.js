/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function inAsync
 * @type {Function}
 * @category Utility
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { inAsync, assert } from '@universalweb/acid';
 * const list = [];
 * await inAsync([async (firstArgument, item, index) => {
 *   list.push(index + firstArgument.a);
 * }, async (firstArgument, item, index) => {
 *   list.push(index);
 * }], {a:1});
 * assert(list, [1, 1]);
 */
export async function inAsync(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = await source[index].call(thisBind, ...args, index, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = await source[index](...args, index, callable);
		}
	}
	return results;
}
