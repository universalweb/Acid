/**
 * Returns a regex safe special characters escaped version of a string.
 *
 * @function regexSafe
 * @category object
 * @type {Function}
 * @param {Object} source - String to make safe.
 * @returns {Object} - Returns a regex safe version of the string.
 *
 * @example
 * import { regexSafe, assert } from '@universalweb/acid';
 * assert(regexSafe(/.+/), '\/\.\+\/');
 */
export const escapeRegexRegex = /[()[\]{}*+?^$|#.,/\\\s-]/g;
export function escapeRegex(source) {
	return source.replace(escapeRegexRegex, '\\$&');
}
