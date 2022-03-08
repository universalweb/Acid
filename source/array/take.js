/**
  * Returns a shallow copy of the array up to an amount.
  *
  * @function take
  * @category array
  * @type {Function}
  * @param {Array} source - The source array to take from.
  * @param {Array} [end = 1] - Zero-based index before which to end extraction.
  * @returns {Array} - The aggregated array.
  *
  * @example
  * take([1,2,3], 2);
  * // => [1, 2]
*/
export const take = (source, end = 1) => {
	return source.slice(0, end);
};
/**
  * Returns a shallow copy of the array up to an amount starting from the right.
  *
  * @function takeRight
  * @category array
  * @type {Function}
  * @param {Array} source - The source array to take right from.
  * @param {Array} [end = 1] - Zero-based index before which to end extraction.
  * @returns {Array} - The aggregated array.
  *
  * @example
  * takeRight([1,2,3], 2);
  * // => [2, 3]
*/
export const takeRight = (source, amount = 1) => {
	const arrayLength = source.length;
	return source.slice(arrayLength - amount, arrayLength);
};

