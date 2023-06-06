/**
 * Sorts an array in place using a key in ascending order.
 *
 * @function sortCollectionAscending
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array and or a clone of the array sorted.
 *
 * @example
 * import { sortCollectionAscending, assert } from 'Acid';
 * const result = [{id: 0}, {id: 1}];
 * const collect = [{id: 1}, {id: 0}];
 * const prop = 'id';
 * assert(sortCollectionAscending(collect, prop), result);
 */
export function sortCollectionAscendingFilter(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	if (!nextKey) {
		return 1;
	} else if (!previousKey) {
		return -1;
	} else if (previousKey < nextKey) {
		return -1;
	} else if (previousKey > nextKey) {
		return 1;
	}
	return 0;
}
export function sortCollectionAscending(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortCollectionAscendingFilter(previous, next, propertyName, ifMatch);
	});
}
