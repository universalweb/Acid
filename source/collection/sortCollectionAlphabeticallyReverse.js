/**
 * Perform alphabetical in reverse Z-A sort on a collection with the provided key name. Mutates the array.
 *
 * @function sortCollectionAlphabeticallyReverse
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - Name of property to compare.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array.
 *
 * @example
 * import { sortCollectionAlphabeticallyReverse, assert } from '@universalweb/acid';
 * const result = [{letter:'f'},{"letter":"c"}, {"letter":"a"}];
 * const collect = [{letter:'a'}, {letter:'f'}, {"letter":"c"}];
 * const prop = 'letter';
 * assert(sortCollectionAlphabeticallyReverse(collect, prop), result);
 */
export function sortObjectsAlphabeticallyReverse(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	return nextKey.localeCompare(previousKey);
}
export function sortCollectionAlphabeticallyReverse(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortObjectsAlphabeticallyReverse(previous, next, propertyName, ifMatch);
	});
}
