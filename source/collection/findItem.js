import { findIndexCache } from './findIndexCache.js';
/**
 * Finds an object in a collection by the given id and property name.
 *
 * @function findItem
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be checked for an item.
 * @param {Number|string} id - The value to look for.
 * @param {String} [propertyName = 'id'] - The name of the property to compare.
 * @returns {Object} - The found object.
 *
 * @example
 * findItem([{id: 1}, {id: 2}], 1);
 * // => {id: 1}
 */
export function findItem(collection, id, propertyName = 'id') {
	const result = collection.find((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return (result === -1) ? false : result;
}
