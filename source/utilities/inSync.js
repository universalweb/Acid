/**
 * Invoke an array of functions in order, optionally bound to `thisBind`. Returns the array of results.
 *
 * @function inSync
 * @category utility
 * @type {Function}
 * @param {Array} source - Array of functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args -The arguments passed to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Array} - An array of the results in source order.
 *
 * @example
 * import { inSync, assert } from '@universalweb/acid';
 * const collected = [];
 * inSync([() => collected.push(1), () => collected.push(2)]);
 * assert(collected, [1, 2]);
 */
export function inSync(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = callable.call(thisBind, ...args, index, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = callable(...args, index, callable);
		}
	}
	return results;
}
