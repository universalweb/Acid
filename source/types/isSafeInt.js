const { isSafeInteger } = Number;
/**
 * Checks if the value (typically a number) as a string has a decimal point. Alias of Number.isInteger.
 *
 * @function isSafeInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSafeInt } from 'Acid';
 * isSafeInt(1.01);
 * // => true
 */
export const isSafeInt = isSafeInteger;
