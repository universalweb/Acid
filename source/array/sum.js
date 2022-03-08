/**
  * Reduces the values in an array into a single number.
  *
  * @function sum
  * @category array
  * @type {Function}
  * @param {Array} array - Array to be reduced.
  * @returns {number} - Returns a single value.
  *
  * @example
  * sum([1, 2, 3, 4]);
  * // => 10
*/
export const sum = (array) => {
	return array.reduce((a, b) => {
		return a + b;
	}, 0);
};

