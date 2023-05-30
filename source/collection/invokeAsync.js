import { mapAsyncArray } from '../arrays/mapAsync.js';
/**
 * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeAsync
 * @category collection
 * @type {Function}
 * @async
 * @param {Array} collection - Collection from which method will be taken.
 * @param {string} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @test
 * (async () => {
 *   const result = await invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'EXAMPLE');
 *   return assert(result, [['EXAMPLE', 0], ['EXAMPLE', 1]]);
 * });
 *
 * @example
 * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'EXAMPLE');
 * // => [['EXAMPLE', 0], ['EXAMPLE', 1]]
 */
export function invokeAsync(collection, property, value) {
	return mapAsyncArray(collection, async (item, index) => {
		return item[property](value, index);
	});
}

