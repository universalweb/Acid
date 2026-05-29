/**
 * Flattens an array up to the provided level. Thin wrapper over native `Array.prototype.flat`.
 *
 * @function flatten
 * @type {Function}
 * @category array
 * @param {Array} source - Array to flatten.
 * @param {Number} [level=1] - Depth limit.
 * @returns {Array|undefined} - Flattened array, or undefined when `source` is falsy.
 *
 * @example
 * import { flatten, assert } from '@universalweb/acid';
 * assert(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
 */
export function flatten(source, level = 1) {
	if (!source) {
		return;
	}
	return source.flat(level);
}
