import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumber } from 'Acid';
 * isNumber(1);
 * // => true
 */
export const isNumber = isConstructorFactory(Number);
