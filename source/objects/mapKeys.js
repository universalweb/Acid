/**
 * Returns a new object where each key is transformed by the iteratee.
 *
 * @function mapKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object.
 * @param {Function} iteratee - Receives (value, key, source) and returns the new key.
 * @returns {Object} - New object with transformed keys.
 *
 * @example
 * import { mapKeys, assert } from '@universalweb/acid';
 * assert(mapKeys({a: 1}, (value, key) => key.toUpperCase()), {A: 1});
 */
export function mapKeys(source, iteratee) {
	const result = {};
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		const value = source[key];
		result[iteratee(value, key, source)] = value;
	}
	return result;
}
