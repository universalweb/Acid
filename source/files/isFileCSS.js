const cssRegex = /\.css$/;
/**
 * Checks if the string has a .css extension.
 *
 * @function isFileCSS
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileCSS, assert } from '@universalweb/acid';
 * assert(isFileCSS('test.css'), true);
 */
export function isFileCSS(source) {
	return source !== undefined && source !== null && cssRegex.test(source);
}
