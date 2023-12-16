import { isPlainObject } from '../types/isPlainObject.js';
import { isTruthy } from '../types/isTruthy.js';
import { keys } from '../objects/keys.js';
/**
 * Creates an array with all isFalsy values removed. The values false, null, 0, "", undefined, and NaN are isFalsy.
 *
 * @function compact
 * @category Utility
 * @type {Function}
 * @param {Array|Object} source - Array or Object to be compacted.
 * @returns {Array|Object} - A new object or array containing the filtered values.
 *
 * @example
 * import { compact, assert } from '@universalweb/acid';
 * assert(compact([1,'B', 'Cat', false, null, 0 , '', undefined, NaN]), [1, 'B', 'Cat']);
 */
export function compact(source) {
	if (isPlainObject(source)) {
		const sourceKeys = keys(source);
		const sourceKeysLength = sourceKeys.length;
		const targetObject = {};
		for (let i = 0; i < sourceKeysLength; i++) {
			const keyName = sourceKeys[i];
			const item = source[keyName];
			const isisTruthy = isTruthy(item);
			if (isisTruthy) {
				targetObject[keyName] = item;
			}
		}
		return targetObject;
	}
	return source.filter((item) => {
		return isTruthy(item);
	});
}

