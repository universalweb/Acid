import { flattenDeep } from './flattenDeep.js';
import { unique } from './unique.js';
/**
 * Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
 *
 * @function union
 * @category array
 * @type {Function}
 * @param {...Array} arrays - The arrays to be evaluated.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * union([1,2,4], [1,2,3]);
 * // => [1, 2, 4, 3]
 */
export function union(...arrays) {
	return unique(flattenDeep(arrays));
}

