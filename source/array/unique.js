const onlyUnique = (value, index, array) => {
	return array.indexOf(value) === index;
};
const sortUnique = (item, index, array) => {
	return item !== array[index - 1];
};
/**
  * Filters the array down to unique elements.
  *
  * @function unique
  * @category array
  * @type {Function}
  * @param {Array} source - The array to be filtered.
  * @param {Boolean} isSorted - Flag which means the array is already sorted.
  * @returns {Array} - The filtered array.
  *
  * @example
  * unique([1, 2, 2, 4]);
  * // => [1, 2, 4]
*/
export const unique = (source, isSorted) => {
	if (isSorted) {
		return source.filter(sortUnique);
	}
	return source.filter(onlyUnique);
};

