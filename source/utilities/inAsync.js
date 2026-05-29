/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function inAsync
 * @type {Function}
 * @category utility
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Array} - An array of the awaited results in source order.
 *
 * @example
 * import { inAsync, assert } from '@universalweb/acid';
 * const list = [];
 * await inAsync([
 *   async (firstArgument, index) => { list.push(index + firstArgument.a); },
 *   async (firstArgument, index) => { list.push(index); },
 * ], null, {a: 1});
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
