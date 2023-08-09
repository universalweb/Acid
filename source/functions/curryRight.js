import { clearArray } from '../arrays/clear.js';
/**
 * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method.length is not sufficient. The arguments are given in reverse order.
 *
 * @function curryRight
 * @type {Function}
 * @param {Function} callable - The function to curry.
 * @param {Number} arity - The arity of method.
 * @returns {*} - Returns the new curried function.
 *
 * @example
 * import { curryRight, assert } from '@universalweb/acid';
 * const result = curryRight((a, b, c) => {
 *   return [a, b, c];
 * })(1)(2)(3);
 * assert(result, [3, 2, 1]);
 */
export function curryRight(callable, arity = callable.length) {
	const curries = [];
	const curried = (...curryArgs) => {
		curries.unshift(...curryArgs);
		if (curries.length === arity) {
			const result = callable(...curries);
			clearArray(curries);
			return result;
		}
		return curried;
	};
	return curried;
}
