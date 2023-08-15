import { hasValue } from '../types/hasValue.js';
import { isFunction } from '../types/isFunction.js';
import { apply } from '../internal/apply.js';
import { isPlainObject } from '../types/isPlainObject.js';
/**
 * If source has a value then assign it to an object or call a function.
 *
 * @function ifValue
 * @category utility
 * @param {*} source - The source object to be hasValue checked.
 * @param {Function|Object} target - The target which is either a function or object.
 * @param {*|String} optional - If target is a plain object then it must be a string and is used to assign the property name. Else it's used as the this for the provided function (target).
 * @param {Array} args - The args that would be used if the target is a function and is the params that is applied to the function.
 * @returns {source} The source object if it passes the hasValue check.
 *
 * @example
 * import { ifValue, assert } from '@universalweb/acid';
 * assert(ifValue(1, {}, 'a'), {a:1});
 */
export function ifValue(source, target, optional, args) {
	if (hasValue(source)) {
		if (isFunction(target)) {
			if (optional) {
				return apply(target, optional, args);
			}
			return target(...args);
		} else if (isPlainObject(target)) {
			target[optional] = source;
			return target;
		}
	}
}
