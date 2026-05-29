/**
 * Caches the result of a function by argument key. The cache lives on `instance.cache` (a Map). By default the first argument is the cache key; pass a `resolver` to customize.
 *
 * @class Memoizer
 * @category utility
 *
 * @example
 * import { Memoizer, assert } from '@universalweb/acid';
 * let count = 0;
 * function slow(n) { count++; return n * 2; }
 * const memo = Memoizer.create(slow);
 * memo.run(2); memo.run(2); memo.run(2);
 * assert(count, 1);
 */
export class Memoizer {
	static create(method, resolver) {
		return new Memoizer(method, resolver);
	}
	cache = new Map();
	constructor(method, resolver) {
		this.method = method;
		this.resolver = resolver;
	}
	run(...args) {
		const key = this.resolver ? this.resolver(...args) : args[0];
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}
		const result = this.method(...args);
		this.cache.set(key, result);
		return result;
	}
	clear() {
		this.cache.clear();
	}
}
