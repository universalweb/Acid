import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a '.'.
 *
 * @function hasDot
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * hasDot('test.js');
 * // => true
*/
export const hasDot = regexTestFactory(/\./);
