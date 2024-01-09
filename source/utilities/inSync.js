import { each } from './each.js';
/**
 * Invoke an array of functions.
 *
 * @function inSync
 * @category Utility
 * @type {Function}
 * @param {Array} source - Array of functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args -The arguments passed to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * inSync([() => {console.log(1);}, () => {console.log(2);}]);
 * // 1
 * // 2
 * // => undefined
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
