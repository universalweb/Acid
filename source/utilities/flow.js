import { eachArray } from '../arrays/each.js';
import { eachRight } from '../arrays/eachRight.js';
/**
 * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
 *
 * @function flow
 * @category utility
 * @type {Function}
 * @param {...Function} methods - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flow, increment, deduct, assert } from '@universalweb/acid';
 * assert(flow(increment, increment, deduct)(0), 1);
 */
export function flow(...methods) {
	return function flowComposed(arg) {
		let value = arg;
		eachArray(methods, (item) => {
			value = item(value);
		});
		return value;
	};
}
/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @function flowRight
 * @category utility
 * @type {Function}
 * @param {...Function} methods - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowRight, increment, deduct, assert } from '@universalweb/acid';
 * assert(flowRight(increment, increment, deduct)(0), 1);
 */
export function flowRight(...methods) {
	return function flowRightComposed(arg) {
		let value = arg;
		eachRight(methods, (item) => {
			value = item(value);
		});
		return value;
	};
}
