/**
 * Creates a function that negates the result of the predicate callable.
 *
 * @function negate
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @returns {*} - Returns the given methods result.
 *
 * @example
 * import { negate, assert } from '@universalweb/acid';
 * assert(negate(() => false)(), true);
 */
export function negate(callable) {
	return (...args) => {
		return !callable(...args);
	};
}

