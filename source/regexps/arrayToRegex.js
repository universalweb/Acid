import { escapeRegex } from './escapeRegex.js';
import { mapArray } from '../arrays/map.js';
/**
 * Convert array of strings to regex.
 *
 * @function arrayToRegex
 * @category object
 * @type {Function}
 * @param {Object} source - Array of strings.
 * @returns {Object} - Returns a regex safe version of the string.
 *
 * @example
 * import { arrayToRegex, assert } from 'Acid';
 * assert(String(arrayToRegex(['a','b'])), String(/a|b/));
 */
export function arrayToRegex(source, makeSafe) {
	if (makeSafe) {
		return arrayToRegex(mapArray(source, escapeRegex));
	}
	return RegExp(source.join('|'));
}
