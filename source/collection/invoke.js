import { mapArray } from '../arrays/map.js';
/**
 * Invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeCollection
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection from which method will be taken.
 * @param {String} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @example
 * import { invokeCollection, assert } from '@universalweb/acid';
 * const results = invokeCollection([{
 *	test(item, index) { return [item, index];}
 * }], 'test', ['EXAMPLE']);
 * assert(results, [['EXAMPLE', 0]]);
 */
export function invokeCollection(collection, property, value) {
	return mapArray(collection, (item, index) => {
		return item[property](value, index);
	});
}

