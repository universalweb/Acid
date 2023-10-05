/**
 * Replaces all occurrences of strings in an array with a value.
 *
 * @function replaceList
 * @category string
 * @type {Function}
 * @param {String} string - String to be replaced.
 * @param {Array} words - Strings to replace.
 * @param {String} value - The match replacement.
 * @returns {String} - The string with the replacement.
 *
 * @example
 * import { replaceList, assert } from '@universalweb/acid';
 * assert(replaceList('user name was user.', ['user'], 'this'), 'this name was this.');
 */
export function replaceList(string, words, value) {
	return string.replace(new RegExp(`\\b${words.join('|')}\\b`, 'gi'), value);
}
