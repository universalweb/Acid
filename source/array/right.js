/**
  * Get the item at the supplied index starting at the end of the array.
  *
  * @function right
  * @type {Function}
  * @category array
  * @param {Array} source - Array to be sliced.
  * @param {number} amount - Amount from the right.
  * @returns {*} - Returns the object at the evaluated position.
  *
  * @example
  * right([1, 2, 3, 4, 5] , 1);
  * // => 4
*/
export const right = (source, amount) => {
	return source[source.length - 1 - amount];
};

