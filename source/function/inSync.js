import { each } from '../utility/each.js';
/**
 * Invoke an array of functions.
 *
 * @function inSync
 * @category function
 * @type {Function}
 * @param {Array|Object|Function} collection - The functions to be invoked.
 * @param {*} value - The object passed as an argument to each method.
 * @returns {undefined} - Returns undefined.
 *
 * @test
 * (() => {
 *   const tempList = [];
 *   inSync([() => {tempList.push(1);}, () => {tempList.push(2);}]);
 *   return assert(tempList, [1, 2]);
 * });
 *
 * @example
 * inSync([() => {console.log(1);}, () => {console.log(2);}]);
 * // 1
 * // 2
 * // => undefined
 */
export const inSync = (collection, value) => {
	return each(collection, (item) => {
		item(value);
	});
};

