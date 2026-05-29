const defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * Generates a non-cryptographic random string. Do not use for security-sensitive identifiers.
 *
 * @function randomString
 * @category string
 * @type {Function}
 * @param {Number} stringLength - Length of the string to generate.
 * @param {String} [alphabet] - Optional alphabet to draw characters from. Defaults to alphanumerics.
 * @returns {String} - Random string of the given length.
 *
 * @example
 * import { randomString, assert } from '@universalweb/acid';
 * assert(randomString(8).length, 8);
 */
export function randomString(stringLength, alphabet = defaultAlphabet) {
	const max = alphabet.length;
	let result = '';
	for (let index = 0; index < stringLength; index++) {
		result += alphabet[Math.floor(Math.random() * max)];
	}
	return result;
}
