export const escapeRegexRegex = /[()[\]{}*+?^$|#.,/\\\s-]/g;
/**
 * Returns a regex-safe version of a string with special characters escaped.
 *
 * @function escapeRegex
 * @category regex
 * @type {Function}
 * @param {String} source - String to make regex-safe.
 * @returns {String} - Regex-safe version of the string.
 *
 * @example
 * import { escapeRegex, assert } from '@universalweb/acid';
 * assert(escapeRegex('.+'), '\\.\\+');
 */
export function escapeRegex(source) {
	return source.replace(escapeRegexRegex, '\\$&');
}
