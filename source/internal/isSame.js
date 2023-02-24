/**
 * Determines whether two values are the same value.
 *
 * @function isSame
 * @category object
 * @param {*} source - Value to compare to.
 * @param {*} target - A value to compare.
 * @returns {Boolean} - A Boolean indicating whether or not the two arguments are the same value.
 *
 * @example
 * isSame('foo', 'foo');
 * // => true
*/
export const isSame = Object.is;
