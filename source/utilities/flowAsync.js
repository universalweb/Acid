import { eachAsyncArray } from '../arrays/eachAsync.js';
import { eachRightAsync } from '../arrays/eachRightAsync.js';
function returnFlow(callable) {
	return (...methods) => {
		return async (arg) => {
			let value = arg;
			await callable(methods, async (item) => {
				value = await item(value);
			});
			return value;
		};
	};
}
/**
 * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
 *
 * @function flowAsync
 * @category utility
 * @type {Function}
 * @async
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsync, increment, assert } from '@universalweb/acid';
 * assert(await flowAsync(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
export const flowAsync = returnFlow(eachAsyncArray);
/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @function flowAsyncRight
 * @category utility
 * @type {Function}
 * @async
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsyncRight, increment, assert } from '@universalweb/acid';
 * assert(await flowAsyncRight(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
export const flowAsyncRight = returnFlow(eachRightAsync);

