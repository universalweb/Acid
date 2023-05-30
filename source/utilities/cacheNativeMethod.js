const functionPrototype = Function.prototype;
/**
 * Caches a prototype method.
 *
 * @function cacheNativeMethod
 * @category utility
 * @type {Function}
 * @param {Function} method - Prototype method.
 * @returns {Function} - Cached method.
 *
 * @example
 * import { cacheNativeMethod, assert } from 'Acid';
 * assert(cacheNativeMethod(Array.prototype.push)([], 1), 1);
 */
export function cacheNativeMethod(method) {
	return functionPrototype.call.bind(method);
}

