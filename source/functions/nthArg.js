/**
 * Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
 *
 * @function nthArg
 * @category function
 * @type {Function}
 * @param {Number} [index = 0] - The index of the argument to return.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * nthArg(1)('a', 'b');
 * // => 'b'
 */
export function nthArg(index = 0) {
	return (...args) => {
		return args[index];
	};
}

