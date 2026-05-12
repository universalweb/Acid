/**
 * Returns a new object that fills missing keys on `target` from later source objects.
 * Existing keys on `target` (other than undefined) are preserved.
 *
 * @function defaults
 * @category object
 * @type {Function}
 * @param {Object} target - Object whose defined values take precedence.
 * @param {...Object} sources - Source objects providing fallback values.
 * @returns {Object} - A new object combining target with defaults.
 *
 * @example
 * import { defaults, assert } from '@universalweb/acid';
 * assert(defaults({a: 1}, {a: 2, b: 2}), {a: 1, b: 2});
 */
export function defaults(target, ...sources) {
	const result = { ...target };
	const sourceCount = sources.length;
	for (let sourceIndex = 0; sourceIndex < sourceCount; sourceIndex++) {
		const source = sources[sourceIndex];
		const keys = Object.keys(source);
		const keysLength = keys.length;
		for (let index = 0; index < keysLength; index++) {
			const key = keys[index];
			if (result[key] === undefined) {
				result[key] = source[key];
			}
		}
	}
	return result;
}
