import { isFunction } from '../types/isFunction.js';
/**
 * Checks if the given method is a function. If it is then it invokes it with the given arguments.
 *
 * @function ifInvoke
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked if possible.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to the function.
 * @returns {*} - Returns the method invoked or undefined.
 *
 * @example
 * import { ifInvoke, assert } from '@universalweb/acid';
 * assert(ifInvoke((...args) => { return args;}, 1, 2), [1, 2]);
 */
export function ifInvoke(callable, thisBind, ...args) {
	if (isFunction(callable)) {
		if (thisBind) {
			return callable.call(thisBind, ...args);
		}
		return callable(...args);
	}
}

