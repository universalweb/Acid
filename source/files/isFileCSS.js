import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .css extension.
 *
 * @function isFileCSS
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * isFileCSS('test.css');
 * // => true
*/
export const isFileCSS = regexTestFactory(/\.css$/);
