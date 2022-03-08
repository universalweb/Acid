/**
  * Clears the values out of an array.
  *
  * @function clear
  * @category Array
  * @type {Function}
  * @param {Array} array - Takes an array to be emptied.
  * @returns {Array} - The originally given array.
  *
  * @example
  * clear([1,'B', 'Cat']);
  * // => []
*/
export const clear = (array) => {
	array.length = 0;
	return array;
};

