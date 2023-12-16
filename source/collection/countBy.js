import { chunk } from '../arrays/chunk.js';
import { eachArray } from '../arrays/each.js';
/**
 * Creates an object composed of keys generated from the results of running each element of collection through iteratee.
 *
 * @function countBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function} iteratee - The iteratee to transform keys.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 * import { countBy, assert } from '@universalweb/acid';
 * assert(countBy([{a:1}, {a:3}], (item) => { return 'a';}), {a: 2});
 */
export function countBy(collection, iteratee) {
	const object = {};
	let result;
	eachArray(collection, (item) => {
		result = iteratee(item);
		if (!object[result]) {
			object[result] = 0;
		}
		object[result]++;
	});
	return object;
}
