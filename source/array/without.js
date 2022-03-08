/**
  * Returns a copy of the array with all instances of the values removed.
  *
  * @function without
  * @type {Function}
  * @category array
  * @param {Array} target - The target array to be filtered.
  * @param {Array} removeThese - Items to be removed.
  * @returns {Array} - The target array filtered.
  *
  * @example
  * without([1, 2, 2, 4], [4]);
  * // => [1, 2, 2]
*/
export const without = (target, removeThese) => {
	return target.filter((item) => {
		return !removeThese.includes(item);
	});
};

