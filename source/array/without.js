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
 * without([1, 2, 2, 4], [4]);
 * // => [1, 2, 2]
 */
// Modify to generate Mapping of sources values to loop through target and filter accordingly
export function without(target, sources) {
	return target.filter((item) => {
		return !sources.includes(item);
	});
}

