const { isInteger } = Number;
/**
 * Checks if the value (typically a number) as a string has a decimal point. Alias of Number.isInteger.
 *
 * @function isFloat
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFloat } from 'Acid';
 * isFloat(1.01);
 * // => true
 */
export const isFloat = isInteger;
