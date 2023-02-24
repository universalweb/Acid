/**
 * Creates a function that executes callable, only before n times.
 *
 * @function before
 * @category function
 * @type {Function}
 * @param {number} amount - The number of calls before n.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @test
 * (async () => {
 *   const onlyBefore = before(3, (item) => { return item;});
 *   return await assert(onlyBefore(1), 1) && await assert(onlyBefore(2), 2) && await assert(onlyBefore(3), 2);
 * });
 *
 * @example
 * const onlyBefore = before(3, () => { return 1;});
 * onlyBefore(1);
 * // => 1
 * onlyBefore(2);
 * // => 2
 * onlyBefore(3);
 * // => 2
 */
export function before(amount, callable) {
	let point = amount;
	let value;
	const onlyBefore = (...args) => {
		if (point !== null) {
			point--;
		}
		if (point >= 1) {
			value = callable(...args);
		} else {
			point = null;
		}
		return value;
	};
	return onlyBefore;
}
