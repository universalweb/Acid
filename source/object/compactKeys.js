import { eachObject } from '../object/each.js';
import { hasValue } from '../type/hasValue.js';
import { assign } from './assign';
/**
 * Extracts all keys from an object whose values are not null or undefined.
 *
 * @function compactKeys
 * @category object
 * @type {Function}
 * @param {Object} object - Object from which keys are extracted.
 * @returns {Array} - Returns an array of key values.
 *
 * @example
 * import { compactKeys, assert } from 'Acid';
 * assert(compactKeys({a: 1, b: 0, c: undefined, d: false, e: null}), {a:1, b:0, d: false});
 */
export function compactKeys(object) {
	const compactedKeys = [];
	eachObject(object, (item, key) => {
		if (hasValue(item)) {
			compactedKeys.push(key);
		}
	});
	return compactedKeys;
}

