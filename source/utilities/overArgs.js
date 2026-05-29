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
function applyTransforms(method, transforms, transformsLength, args) {
	const argsLength = args.length;
	const transformed = new Array(argsLength);
	for (let argIndex = 0; argIndex < argsLength; argIndex++) {
		transformed[argIndex] = argIndex < transformsLength ? transforms[argIndex](args[argIndex]) : args[argIndex];
	}
	return method(...transformed);
}
export function overArgs(method, transforms) {
	const transformsLength = transforms.length;
	return function overArgsWrapper(...args) {
		return applyTransforms(method, transforms, transformsLength, args);
	};
}
