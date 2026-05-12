import { hasValue } from '../types/hasValue.js';
/**
 * Creates a function that is restricted to execute method once. Repeat calls to the function will return the value of the first call. The method is executed with the this binding of the created function.
 *
 * @function once
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { once, assert } from '@universalweb/acid';
 * const onceOnly = once((item) => item);
 * onceOnly(5);
 * assert(onceOnly(3), 5);
 */
export const once = (callable) => {
	let value;
	const onlyOnce = (...args) => {
		if (!hasValue(value)) {
			value = callable(...args);
		}
		return value;
	};
	return onlyOnce;
};
