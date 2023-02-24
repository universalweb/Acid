/**
 * Creates a function that executes callable, only after being called n times.
 *
 * @function after
 * @category function
 * @type {Function}
 * @param {number} amount - The number of calls until method is invoked.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @test
 * (async () => {
 *   const onlyAfter = after(2, (item) => { return item;});
 *   return await assert(onlyAfter(1), undefined) && await assert(onlyAfter(2), 2);
 * });
 *
 * @example
 * const onlyAfter = after(1, (item) => { return item;});
 * onlyAfter(1);
 * // => undefined
 * onlyAfter(2);
 * // => 2
 */
export function after(amount, callable) {
	let point = amount;
	let value;
	const onlyAfter = (...args) => {
		if (point !== null) {
			point--;
		}
		if (point <= 0) {
			value = callable(...args);
			point = null;
		}
		return value;
	};
	return onlyAfter;
}
