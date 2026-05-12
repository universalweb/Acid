const diacriticsRegex = /[̀-ͯ]/g;
const nonAlnumRegex = /[^a-z0-9]+/g;
const trimDashRegex = /^-+|-+$/g;
/**
 * Converts a string into a URL-safe slug. Lowercases, strips diacritics,
 * replaces non-alphanumeric runs with a separator, and trims leading/trailing separators.
 *
 * @function slugify
 * @category string
 * @type {Function}
 * @param {String} source - String to slugify.
 * @param {String} [separator='-'] - Replacement for non-alphanumeric runs.
 * @returns {String} - Slugified string.
 *
 * @example
 * import { slugify, assert } from '@universalweb/acid';
 * assert(slugify('Héllo World!'), 'hello-world');
 */
export function slugify(source, separator = '-') {
	const normalized = source.normalize('NFKD').replace(diacriticsRegex, '').toLowerCase();
	const replaced = normalized.replace(nonAlnumRegex, separator);
	if (separator === '-') {
		return replaced.replace(trimDashRegex, '');
	}
	const escaped = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return replaced.replace(new RegExp(`^${escaped}+|${escaped}+$`, 'g'), '');
}
