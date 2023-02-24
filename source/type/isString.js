import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isString } from './Acid.js';
 * isString('Lucy');
 * // => true
*/
export const isString = isConstructorFactory(String);
