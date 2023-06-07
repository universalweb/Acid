/**
 * Return the file extension.
 *
 * @function getFilename
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {String} - Returns the extension.
 *
 * @example
 * import { getFilename, assert } from '@universalweb/acid';
 * assert(getFilename('./universalweb/test.js'),'test.js');
 */
export function getFilename(source) {
	if (source) {
		return source.substring(source.lastIndexOf('/') + 1);
	}
}
