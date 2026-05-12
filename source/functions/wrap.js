/**
 * Creates a function that provides value to wrapper as its first argument. The wrapper function is given two arguments the value and the provided argument from the newly created function.
 *
 * @function wrap
 * @category function
 * @type {Function}
 * @param {*} value - The value to wrap.
 * @param {Function} wrapper - The wrapper function.
 * @returns {Function} - The new function.
 *
 * @example
 * import { wrap, assert } from '@universalweb/acid';
 * const greet = wrap('Lucy', (firstName, lastName) => `My name is ${firstName} ${lastName}.`);
 * assert(greet('Diamonds'), 'My name is Lucy Diamonds.');
 */
export function wrap(value, wrapper) {
	return (...arg) => {
		return wrapper(value, ...arg);
	};
}

