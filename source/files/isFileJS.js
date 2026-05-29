const jsRegex = /\.js$/;
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
export function isFileJS(source) {
	return source !== undefined && source !== null && jsRegex.test(source);
}
