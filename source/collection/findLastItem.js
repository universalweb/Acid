import { findIndexCache } from './findIndexCache.js';
/**
 * Finds the last object in a collection whose `propertyName` equals `id`. Walks from the end. Backed by native `Array.prototype.findLast` (ES2023 / Node 18+).
 *
 * @function findLastItem
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be searched.
 * @param {Number|String} id - The value to look for.
 * @param {String} [propertyName='id'] - The name of the property to compare.
 * @returns {Object|false} - The found object, or false when none match.
 *
 * @example
 * import { findLastItem, assert } from '@universalweb/acid';
 * assert(findLastItem([{id: 1, tag: 'a'}, {id: 1, tag: 'b'}], 1), {id: 1, tag: 'b'});
 */
export function findLastItem(collection, id, propertyName = 'id') {
	const result = collection.findLast((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return result === undefined ? false : result;
}
