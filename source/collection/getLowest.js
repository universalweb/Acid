import { getHighest } from './getHighest';
import { sortCollectionAlphabetically } from './sortCollectionAlphabetically';
import { sortCollectionDescending } from './sortCollectionDescending.js';
/**
 * Sorts an array in place using a key from newest to oldest and returns the latest. Does not mutate the array.
 *
 * @function getLowest
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @returns {Object} - The newest object in the collection.
 *
 * @example
 * import { getLowest, assert } from '@universalweb/acid';
 * assert(getLowest([{id: 1}, {id: 0}], 'id'), {id: 1});
 */
export function getLowest(collection, propertyName) {
	return sortCollectionDescending(collection, propertyName, false)[0];
}
