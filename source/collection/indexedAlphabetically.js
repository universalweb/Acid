/**
 * Perform alphabetical sort on a collection with the provided key name. Mutates the array.
 *
 * @function sortCollectionAlphabetically
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - Name of property to compare.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array.
 *
 * @example
 * import { sortCollectionAlphabetically, assert } from 'Acid';
 * const result = [{"letter":"a"},{"letter":"c", g: 0},{"letter":"c", g: 2}, {letter:'f'}];
 * const collect = [{letter:'a'}, {letter:'f'}, {"letter":"c", g: 2}, {letter:'c', g: 0}];
 * const prop = 'letter';
 * function ifMatchSort(c, n) {
 * if (c.g < n.g) {
 * return -1;
 * }
 * if (c.g > n.g) {
 * return 1;
	* }
 * }
 * assert(sortCollectionAlphabetically(collect, prop, ifMatchSort), result);
 */
export function sortObjectsAlphabetically(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	if (previousKey < nextKey) {
		return -1;
	} else if (previousKey > nextKey) {
		return 1;
	}
	return 0;
}
export function sortCollectionAlphabetically(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortObjectsAlphabetically(previous, next, propertyName, ifMatch);
	});
}
