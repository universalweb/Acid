const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
const andRegex = /&/g;
const lessThanRegex = /</g;
const moreThanRegex = />/g;
const doubleQuoteRegex = /"/g;
/**
 * Raw URL decoder.
 *
 * @function rawURLDecode
 * @category string
 * @type {Function}
 * @param {string} string - String to be replaced.
 * @returns {string} - Converted string into the decoded URI Component .
 *
 * @example
 * import { rawURLDecode, assert } from 'Acid';
 * rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.');
 * // => 'Lucy saw diamonds in the sky.'
 */
export function rawURLDecode(string) {
	return decodeURIComponent(string.replace(rawURLDecodeRegex, () => {
		return '%25';
	}));
}
/**
 * Replaced sensitive characters with their matching html entity.
 *
 * @function htmlEntities
 * @category string
 * @type {Function}
 * @param {string} string - String to be replaced.
 * @returns {string} - Replaced string.
 *
 * @example
 * import { htmlEntities, assert } from 'Acid';
 * htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`);
 * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
 */
export function htmlEntities(string) {
	return string.replace(andRegex, '&amp;')
		.replace(lessThanRegex, '&lt;')
		.replace(moreThanRegex, '&gt;')
		.replace(doubleQuoteRegex, '&quot;');
}
/**
 * Executes rawURLDecode followd by htmlEntities methods on a string.
 *
 * @function sanitize
 * @category string
 * @type {Function}
 * @param {string} string - String to be replaced.
 * @returns {string} - Replaced string.
 *
 * @example
 * import { sanitize, assert } from 'Acid';
 * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
 * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
 */
export function sanitize(string) {
	return htmlEntities(rawURLDecode(string));
}

