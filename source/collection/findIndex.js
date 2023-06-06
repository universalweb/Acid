import { findIndexCache } from './findIndexCache.js';
/**
 * Finds an object in a collection by the given id and property name and returns the array index of the object.
 *
 * @function findIndex
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be checked for an item.
 * @param {Number|string} id - The value to look for.
 * @param {String} [propertyName = 'id'] - The name of the property to compare.
 * @returns {Number} - The index of the object.
 *
 * @example
 * findIndex([{id: 1}, {id: 2}], 1);
 * // => 0
 */
export function findIndex(collection, id, propertyName = 'id') {
	const result = collection.findIndex((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return (result === -1) ? false : result;
}

