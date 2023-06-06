import { sortOldest } from './sortCollectionAscending.js';
/**
 * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
 *
 * @function getOldest
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} key - The property name to sort by based on it's value.
 * @returns {Object} - The newest object in the collection.
 *
 * @example
 * getOldest([{id: 1}, {id: 0}], 'id');
 * // => {id: 0}
 */
export function getOldest(collection, key = 'id') {
	return sortOldest(collection, key)[0];
}
