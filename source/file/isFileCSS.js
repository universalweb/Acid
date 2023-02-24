import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .css extension.
 *
 * @function isFileCSS
 * @category file
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileCSS('test.css');
 * // => true
*/
export const isFileCSS = regexTestFactory(/\.css$/);
