export const decimalCheck = /\.|\+/;
/**
 * Checks if the value (typically a number) as a string has a decimal point.
 *
 * @function isDecimal
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isDecimal } from './Acid.js';
 * isDecimal(1.01);
 * // => true
*/
export const isDecimal = (value) => {
	return decimalCheck.test(value.toString());
};
