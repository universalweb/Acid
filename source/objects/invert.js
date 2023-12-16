import { eachObject } from './each.js';
import { hasAnyKeys } from './hasKeys.js';
/**
 * Creates an inverted version of a given object by switching it's keys and values.
 *
 * @function invert
 * @type {Function}
 * @category object
 * @param {Object} source - Object to be inverted.
 * @param {Array} [target = {}] - Empty object to be populated with inverted values from source.
 * @returns {Object|undefined} - Returns object with keys and values switched.
 *
 * @example
 * import { invert, assert } from '@universalweb/acid';
 * assert(invert({a:1}), {1:'a'});
 */
export function invert(source, target = {}) {
	if (!source) {
		return;
	}
	eachObject(source, (item, key) => {
		target[item] = key;
	});
	return target;
}

