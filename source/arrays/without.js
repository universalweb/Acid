import { construct } from '../classes/construct.js';
/**
 * Returns a copy of the array with all instances of the values removed.
 *
 * @function without
 * @type {Function}
 * @category array
 * @param {Array} target - The target array to be filtered.
 * @param {Array} sources - Items to be removed.
 * @returns {Array} - The target array filtered.
 *
 * @example
 * import { without, assert } from 'Acid';
 * assert(without([1, 2, 2, 4], [4]), [1, 2, 2]);
 */
export function without(target, sources) {
	if (!sources) {
		return target;
	}
	const sourcesSet = construct(Set, sources);
	return target.filter((item) => {
		return !sourcesSet.has(item);
	});
}

