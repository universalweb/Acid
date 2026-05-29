import { eachAsyncArray } from '../arrays/eachAsync.js';
import { eachRightAsync } from '../arrays/eachRightAsync.js';
/**
 * Creates an async function that pipes a value through `methods` left-to-right, awaiting each step.
 *
 * @function flowAsync
 * @category utility
 * @type {Function}
 * @async
 * @param {...Function} methods - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsync, increment, assert } from '@universalweb/acid';
 * assert(await flowAsync(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
export function flowAsync(...methods) {
	return async function flowAsyncComposed(arg) {
		let value = arg;
		await eachAsyncArray(methods, async (item) => {
			value = await item(value);
		});
		return value;
	};
}
/**
 * Async right-to-left variant of `flowAsync`.
 *
 * @function flowAsyncRight
 * @category utility
 * @type {Function}
 * @async
 * @param {...Function} methods - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsyncRight, increment, assert } from '@universalweb/acid';
 * assert(await flowAsyncRight(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
export function flowAsyncRight(...methods) {
	return async function flowAsyncRightComposed(arg) {
		let value = arg;
		await eachRightAsync(methods, async (item) => {
			value = await item(value);
		});
		return value;
	};
}
