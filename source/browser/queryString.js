/**
 * Parses a query string (with or without a leading '?') into a flat object.
 * Repeated keys become arrays. Values are URI-decoded.
 *
 * @function parseQuery
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} [source=location.search] - Query string. Defaults to current location.search when in a browser.
 * @returns {Object} - Plain object of query parameters.
 *
 * @example
 * import { parseQuery, assert } from '@universalweb/acid';
 * assert(parseQuery('?a=1&b=2'), {a: '1', b: '2'});
 */
export function parseQuery(source) {
	const input = source ?? globalThis.location?.search ?? '';
	const result = {};
	const params = new URLSearchParams(input.startsWith('?') ? input.slice(1) : input);
	for (const [key, value] of params) {
		if (key in result) {
			const existing = result[key];
			result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
		} else {
			result[key] = value;
		}
	}
	return result;
}
/**
 * Serializes a flat object to a query string. Array values become repeated keys.
 * Skips null/undefined values. Does not include a leading '?'.
 *
 * @function stringifyQuery
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Object} source - Object of query parameters.
 * @returns {String} - URL-encoded query string.
 *
 * @example
 * import { stringifyQuery, assert } from '@universalweb/acid';
 * assert(stringifyQuery({a: 1, b: [2, 3]}), 'a=1&b=2&b=3');
 */
export function stringifyQuery(source) {
	const params = new URLSearchParams();
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		const value = source[key];
		if (value === null || value === undefined) {
			continue;
		}
		if (Array.isArray(value)) {
			const valueLength = value.length;
			for (let valueIndex = 0; valueIndex < valueLength; valueIndex++) {
				params.append(key, value[valueIndex]);
			}
		} else {
			params.append(key, value);
		}
	}
	return params.toString();
}
