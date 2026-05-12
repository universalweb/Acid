/**
 * Creates a function that runs each transform on its respective argument before invoking the wrapped function.
 *
 * @function overArgs
 * @category utility
 * @type {Function}
 * @param {Function} method - The function to wrap.
 * @param {Function[]} transforms - Functions applied in argument order. Extra arguments past the transforms list pass through unchanged.
 * @returns {Function} - Returns the new wrapped function.
 *
 * @example
 * import { overArgs, assert } from '@universalweb/acid';
 * const sum = (a, b) => a + b;
 * const wrapped = overArgs(sum, [(n) => n * 2, (n) => n * 10]);
 * assert(wrapped(1, 2), 22);
 */
export function overArgs(method, transforms) {
	const length = transforms.length;
	return function(...args) {
		const transformed = new Array(args.length);
		for (let index = 0; index < args.length; index++) {
			transformed[index] = index < length ? transforms[index](args[index]) : args[index];
		}
		return method.apply(this, transformed);
	};
}
