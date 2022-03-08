/**
  * Takes all but the last item in the array.
  *
  * @function initial
  * @category array
  * @type {Function}
  * @param {Array} array - Array to have items extracted from.
  * @returns {Array} - Returns a completely flattened array.
  *
  * @example
  * initial([1, 2, 3, 4, 5]);
  * // => [1, 2, 3, 4]
*/
export const initial = (array) => {
	return array.slice(0, array.length - 1);
};

