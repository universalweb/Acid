/**
 * Returns a new object where each value is transformed by the iteratee. Keys are preserved.
 *
 * @function mapValues
 * @category object
 * @type {Function}
 * @param {Object} source - Source object.
 * @param {Function} iteratee - Receives (value, key, source) and returns the new value.
 * @returns {Object} - New object with transformed values.
 *
 * @example
 * import { mapValues, assert } from '@universalweb/acid';
 * assert(mapValues({a: 1, b: 2}, (value) => value * 10), {a: 10, b: 20});
 */
export function mapValues(source, iteratee) {
	const result = {};
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		result[key] = iteratee(source[key], key, source);
	}
	return result;
}
