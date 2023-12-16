/**
 * Get object's keys.
 *
 * @function keys
 * @category object
 * @param {*} source - The source object to pull keys from.
 * @returns {Array} - Array of keys.
 *
 * @example
 * keys({a: 1, b: 2});
 * // => ['a', 'b']
 */
const objectKeys = Object.keys;
export function keys(source) {
	if (source) {
		return objectKeys(source);
	}
}
