import { isFunction } from '../types/isFunction.js';
import { assign } from '../objects/assign.js';
import { map } from './map.js';
import { assert } from './assert.js';
/**
 * Loops through an object or an array and binds the given object to all functions encountered. Optionally accepts an object which to assign the newly bound functions to.
 *
 * @function bindAll
 * @category utility
 * @type {Function}
 * @param {Object|Function|Array} collection - The functions to bind.
 * @param {*} bindThis - Object to be bound to functions.
 * @param {Object|Function|Array} targetAssign - Object to assign newly bound functions to.
 * @returns {Object|Function|Array} - Returns the collection of bound functions or the assign target provided.
 *
 * @example
 * import { assert, bindAll } from '@universalweb/acid';
 * const bounded = bindAll([function () { return this;}], 'Bounded');
 * assert(bounded[0](), 'Bounded');
 */
export function bindAll(collection, bindThis, targetAssign) {
	const results = map(collection, (item) => {
		return isFunction(item) ? item.bind(bindThis) : item;
	});
	return (targetAssign) ? assign(targetAssign, results) : results;
}

