/**
 * Caches the result of a function based on its arguments. By default, the first argument is used as the cache key.
 * Pass a `resolver` to customize the cache key. The cache lives on `memoized.cache` (a Map).
 *
 * @function memoize
 * @category utility
 * @type {Function}
 * @param {Function} method - The function to memoize.
 * @param {Function} [resolver] - Optional resolver returning the cache key from arguments.
 * @returns {Function} - The memoized function.
 *
 * @example
 * import { memoize, assert } from '@universalweb/acid';
 * let count = 0;
 * const slow = (n) => { count++; return n * 2; };
 * const fast = memoize(slow);
 * fast(2); fast(2); fast(2);
 * assert(count, 1);
 */
export function memoize(method, resolver) {
	const cache = new Map();
	function memoized(...args) {
		const key = resolver ? resolver(...args) : args[0];
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = method.apply(this, args);
		cache.set(key, result);
		return result;
	}
	memoized.cache = cache;
	return memoized;
}
