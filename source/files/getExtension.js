export const getExtensionRegex = /\.([0-9a-z]+)/;
/**
 * Return the file extension.
 *
 * @function getFileExtension
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {String} - Returns the extension.
 *
 * @example
 * getFileExtension('test.js');
 * // => 'js'
*/
export function getFileExtension(source) {
	const match = source.match(getExtensionRegex);
	if (match) {
		return match[1];
	}
}
