/**
 * Return the file extension.
 *
 * @function getFileExtension
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {String|undefined} - Returns the extension.
 *
 * @example
 * import { getFileExtension, assert } from '@universalweb/acid';
 * assert(getFileExtension('test.js'),'js');
 */
export function getFileExtension(source) {
	if (source) {
		return source.substring(source.lastIndexOf('.') + 1);
	}
}
