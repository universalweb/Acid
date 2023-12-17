import { sortCollectionAscending } from './sortCollectionAscending.js';
/**
 * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
 *
 * @function getHighest
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @returns {Object} - The newest object in the collection.
 *
 * @example
 * import { getHighest, assert } from '@universalweb/acid';
 * assert(getHighest([{id: 1}, {id: 0}], 'id'), {id: 0});
 */
export function getHighest(collection, propertyName = 'id') {
	return sortCollectionAscending(collection, propertyName)[0];
}
