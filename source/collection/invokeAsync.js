import { mapAsyncArray } from '../arrays/mapAsync.js';
/**
 * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeCollectionAsync
 * @category collection
 * @type {Function}
 * @async
 * @param {Array} collection - Collection from which method will be taken.
 * @param {String} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @example
 * import { invokeCollectionAsync, assert } from '@universalweb/acid';
 * const results = await invokeCollectionAsync([{
 *	async test(item, index) { return [item, index];}
 * }], 'test', ['EXAMPLE']);
 * assert(results, [['EXAMPLE', 0]]);
 */
export function invokeCollectionAsync(collection, property, value, thisBind) {
	if (thisBind) {
		return mapAsyncArray(collection, (item) => {
			return item[property].call(thisBind, value);
		});
	}
	return mapAsyncArray(collection, async (item) => {
		return item[property](value);
	});
}

