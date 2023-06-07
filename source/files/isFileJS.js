import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .js extension.
 *
 * @function isFileJS
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileJS, assert } from '@universalweb/acid';
 * assert(isFileJS('test.js'), true);
 */
export const isFileJS = regexTestFactory(/\.js$/);
