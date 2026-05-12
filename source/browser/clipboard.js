/**
 * Copies text to the system clipboard via the async Clipboard API.
 *
 * @function copyToClipboard
 * @category browser
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} text - Text to copy.
 * @returns {Promise<void>}
 *
 * @example
 * import { copyToClipboard } from '@universalweb/acid';
 * await copyToClipboard('hello');
 */
export function copyToClipboard(text) {
	return navigator.clipboard.writeText(text);
}
/**
 * Reads text from the system clipboard via the async Clipboard API.
 *
 * @function readFromClipboard
 * @category browser
 * @ignoreTest
 * @async
 * @type {Function}
 * @returns {Promise<String>}
 *
 * @example
 * import { readFromClipboard } from '@universalweb/acid';
 * const text = await readFromClipboard();
 */
export function readFromClipboard() {
	return navigator.clipboard.readText();
}
