/**
 * Indexes a collection of items by the result of an iteratee or property name.
 * Like indexBy, but the second argument may be a function returning the key.
 *
 * @function keyBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function|String} iteratee - Function returning the key, or a property name.
 * @returns {Object} - Object indexed by the resolved key.
 *
 * @example
 * import { keyBy, assert } from '@universalweb/acid';
 * const result = keyBy([{id: 'a'}, {id: 'b'}], 'id');
 * assert(result, {a: {id: 'a'}, b: {id: 'b'}});
 */
export function keyBy(collection, iteratee) {
	const accumulator = {};
	const isFn = typeof iteratee === 'function';
	for (let index = 0; index < collection.length; index++) {
		const item = collection[index];
		const key = isFn ? iteratee(item, index, collection) : item[iteratee];
		accumulator[key] = item;
	}
	return accumulator;
}
