/**
 * Creates a function that invokes callable, with up to n arguments, ignoring any additional arguments.
 *
 * @function ary
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to cap arguments for.
 * @param {Number} amount - The arity cap.
 * @returns {Object} - Returns the new capped function.
 *
 * @example
 * ary((...args) => { return args;}, 2)(1, 2, 3);
 * // => [1, 2]
 */
export function ary(callable, amount) {
	return (...args) => {
		return callable(...args.splice(0, amount));
	};
}

