const jsonRegex = /\.json$/;
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
export function isFileJSON(source) {
	return source !== undefined && source !== null && jsonRegex.test(source);
}
