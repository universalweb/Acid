/**
 * Creates a function that executes callable, only after being called n times.
 *
 * @function after
 * @category function
 * @type {Function}
 * @param {Number} amount - The number of calls until method is invoked.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { after, assert } from '@universalweb/acid';
 * const onlyAfter = after(1, (item) => { return item;});
 * assert(onlyAfter(1), undefined);
 * assert(onlyAfter(2), 2);
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
