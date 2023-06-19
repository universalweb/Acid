import { compactMapArray } from './compactMap.js';
/**
 * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
 *
 * @function partition
 * @type {Function}
 * @category array
 * @param {Array} array - Takes an array to split.
 * @param {Function} predicate - Function run on each item in the array.
 * @returns {Array} - One array split into two arrays.
 *
 * @example
 * import { partition, assert } from '@universalweb/acid';
 * const result = partition([
 *  {user: 'barney', age: 36, active: false},
 *  {user: 'fred', age: 40, active: true},
 *  {user: 'pebbles', age: 1,  active: false}
 * ], (item) => { return item.active; });
 * assert(result, [{"user":"fred","age":40,"active":true}],
 *   [{"user":"barney","age":36,"active":false},
 *   {"user":"pebbles","age":1,"active":false}]);
 */
export function partition(array, predicate) {
	const rejected = [];
	return [
		compactMapArray(array, (item, index) => {
			if (predicate(item, index)) {
				return item;
			}
			rejected.push(item);
		}),
		rejected
	];
}

