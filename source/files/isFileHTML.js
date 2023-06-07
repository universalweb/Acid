import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .html extension.
 *
 * @function isFileHTML
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileHTML, assert } from '@universalweb/acid';
 * assert(isFileHTML('test.html'), true);
 */
export const isFileHTML = regexTestFactory(/\.html$/);
