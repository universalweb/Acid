/**
 * Creates an object composed of keys generated from `iteratee(item)`, where each key maps to the array of items that produced it. Insertion order is preserved. Backed by native `Object.groupBy` (ES2024 / Node 21+ / Safari 17.4+).
 *
 * @function groupBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of items.
 * @param {Function} iteratee - Maps an item to its bucket key.
 * @returns {Object} - The grouped buckets, keyed by iteratee output.
 *
 * @example
 * import { groupBy, assert } from '@universalweb/acid';
 * assert(groupBy([6.1, 4.2, 6.3], Math.floor), { '4': [4.2], '6': [6.1, 6.3] });
 */
export function groupBy(collection, iteratee) {
	return Object.groupBy(collection, iteratee);
}
