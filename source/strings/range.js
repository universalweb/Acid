/**
 * Inserts text into a string at a given position.
 *
 * @function insertInRange
 * @category string
 * @type {Function}
 * @param {String} string - String to insert the text into.
 * @param {Number} index - Point of insertion.
 * @param {String} text - The string to be inserted.
 * @returns {String} - The string with the text inserted at the given point.
 *
 * @example
 * import { insertInRange, assert } from '@universalweb/acid';
 * insertInRange('A from Lucy.', 1, ' tab');
 * // => 'A tab from Lucy.'
 */
export function insertInRange(string, index, text) {
	return string.slice(0, index) + text + string.slice(index, string.length);
}
/**
 * Plucks a letter using the index starting from the right.
 *
 * @function rightString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the letter from.
 * @param {Number} [index=1] - The starting position.
 * @returns {String} - A letter at the given index.
 *
 * @example
 * import { rightString, assert } from '@universalweb/acid';
 * rightString('rightString');
 * // => 'g'
 * rightString('rightString', 2);
 * // => 'n'
 */
export function rightString(string, index = 1) {
	return string[string.length - index];
}
/**
 * Splits up a string into chunks.
 *
 * @function chunkString
 * @category string
 * @type {Function}
 * @param {String} string - String to chunked.
 * @param {Number} [size] - The max string length per chunk.
 * @returns {Array} - An array with strings that are <= size parameter.
 *
 * @example
 * import { chunkString, assert } from '@universalweb/acid';
 * chunkString('chunk', 2);
 * // => ['ch', 'un', 'k']
 */
export function chunkString(string, size) {
	return string.match(new RegExp(`(.|[\r\n]){1,${size}}`, 'g'));
}
/**
 * Truncates everything before the index starting from the right.
 *
 * @function initialString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the initial letters from.
 * @param {Number} [index=1] - Starting point from the right.
 * @returns {String} - A string with the characters before the index starting from the right.
 *
 * @example
 * import { initialString, assert } from '@universalweb/acid';
 * initialString('initialString');
 * // => 'initialStrin'
 * initialString('initialString', 2);
 * // => 'initialStri'
 */
export function initialString(string, index = 1) {
	return string.slice(0, index * -1);
}
/**
 * Truncates everything after a index.
 *
 * @function restString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the rest of the letters from.
 * @param {Number} [index=1] - Starting point.
 * @returns {String} - A string without the characters up-to to the index.
 *
 * @example
 * import { restString, assert } from '@universalweb/acid';
 * restString('restString');
 * // => 'estString'
 * restString('restString', 2);
 * // => 'stString'
 */
export function restString(string, index = 1) {
	return string.substr(index);
}

