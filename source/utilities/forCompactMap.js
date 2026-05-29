import { cloneType } from '../types/cloneType.js';
import { hasValue } from '../types/hasValue.js';
import { isFunction } from '../types/isFunction.js';
import { isSet } from '../types/isSet.js';
/**
 * Iterates source via forEach, cloning the source's type, and pushes/sets each non-null/undefined returned value onto the clone.
 *
 * @function forCompactMap
 * @category utility
 * @type {Function}
 * @param {Array|Object|Map|Set} source - Object that will be looped through.
 * @param {Function} callback - Transformation function returning the new value.
 * @returns {Array|Object|Map|Set} - A new collection of the same type containing the mapped values.
 *
 * @example
 * import { forCompactMap, assert } from '@universalweb/acid';
 * assert(forCompactMap([1, 2, null, 3], (item) => item), [1, 2, 3]);
 */
export function forCompactMap(source, callback) {
	const cloned = cloneType(source);
	if (isFunction(cloned.push) || isFunction(cloned.add)) {
		const isSetCloned = isSet(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			if (hasValue(result)) {
				if (isSetCloned) {
					cloned.add(result);
				} else {
					cloned.push(result);
				}
			}
		});
	} else if (isFunction(cloned.set)) {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned.set(key, result);
			}
		});
	} else {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned[key] = result;
			}
		});
	}
	return cloned;
}
