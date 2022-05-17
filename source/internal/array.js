const arrayNative = Array;
/**
 * Takes an array like object and creates a new Array from it.
 *
 * @function toArray
 * @category array
 * @param {*} arrayLike - Array like object.
 * @returns {*} - New array.
 *
 * @example
 * toArray([1, 2, 3]);
 * // => [1, 2, 3]
*/
export const toArray = arrayNative.from;

