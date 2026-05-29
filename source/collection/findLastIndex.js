import { findIndexCache } from './findIndexCache.js';
/**
 * Finds the index of the last object in a collection whose `propertyName` equals `id`. Backed by native `Array.prototype.findLastIndex` (ES2023 / Node 18+).
 *
 * @function findLastIndex
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be searched.
 * @param {Number|String} id - The value to look for.
 * @param {String} [propertyName='id'] - The name of the property to compare.
 * @returns {Number|false} - The index, or false when none match.
 *
 * @example
 * import { findLastIndex, assert } from '@universalweb/acid';
 * assert(findLastIndex([{id: 1}, {id: 2}, {id: 1}], 1), 2);
 */
export function findLastIndex(collection, id, propertyName = 'id') {
	const result = collection.findLastIndex((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return result === -1 ? false : result;
}
