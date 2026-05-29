/**
 * Computes the union of the passed-in arrays: unique items, in first-seen order, from any of the inputs. Backed by native `.flat(Infinity)` + `Set`.
 *
 * @function union
 * @category array
 * @type {Function}
 * @param {...Array} arrays - The arrays to be evaluated.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { union, assert } from '@universalweb/acid';
 * assert(union([1, 2, 4], [1, 2, 3]), [1, 2, 4, 3]);
 */
export function union(...arrays) {
	return [...new Set(arrays.flat(Infinity))];
}
