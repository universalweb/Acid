import { eachObject } from './each.js';
import { hasValue } from '../types/hasValue.js';
import { assign } from './assign.js';
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
 * import { compactKeys, assert } from '@universalweb/acid';
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

