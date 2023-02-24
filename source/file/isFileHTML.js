import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .html extension.
 *
 * @function isFileHTML
 * @category file
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileHTML('test.html');
 * // => true
*/
export const isFileHTML = regexTestFactory(/\.html$/);
