import { eachArray } from '../arrays/each.js';
import { eachRight } from '../arrays/eachRight.js';
function returnFlow(callable) {
	return (...methods) => {
		return (arg) => {
			let value = arg;
			callable(methods, (item) => {
				value = item(value);
			});
			return value;
		};
	};
}
/**
 * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
 *
 * @function flow
 * @category utility
 * @type {Function}
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * flow(increment, increment, deduct)(0);
 * // => 1
 */
export const flow = returnFlow(eachArray);
/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @function flowRight
 * @category utility
 * @type {Function}
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * flowRight(increment, increment, deduct)(0);
 * // => 1
 */
export const flowRight = returnFlow(eachRight);

