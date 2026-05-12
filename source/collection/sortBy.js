function compare(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}
/**
 * Returns a new array sorted by the value returned from an iteratee or property name.
 * Stable sort, ascending order. Does not mutate the source.
 *
 * @function sortBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of items to sort.
 * @param {Function|String} iteratee - Function returning the comparison key, or a property name.
 * @returns {Array} - New sorted array.
 *
 * @example
 * import { sortBy, assert } from '@universalweb/acid';
 * assert(sortBy([{n: 3}, {n: 1}, {n: 2}], 'n'), [{n: 1}, {n: 2}, {n: 3}]);
 */
export function sortBy(collection, iteratee) {
	const isFn = typeof iteratee === 'function';
	return [...collection].sort((a, b) => {
		return compare(isFn ? iteratee(a) : a[iteratee], isFn ? iteratee(b) : b[iteratee]);
	});
}
