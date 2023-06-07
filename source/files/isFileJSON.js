import { regexTestFactory } from '../internal/regexTestFactory.js';
/**
 * Checks if the string has a .json extension.
 *
 * @function isFileJSON
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileJSON, assert } from '@universalweb/acid';
 * assert(isFileJSON('test.json'), true);
 */
export const isFileJSON = regexTestFactory(/\.json$/);
