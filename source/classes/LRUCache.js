/**
 * Fixed-size LRU (least recently used) cache backed by Map insertion order.
 * Reading or writing a key marks it as most recently used. When capacity is exceeded,
 * the oldest entry is evicted.
 *
 * @class LRUCache
 * @category class
 *
 * @example
 * import { LRUCache, assert } from '@universalweb/acid';
 * const cache = new LRUCache(2);
 * cache.set('a', 1);
 * cache.set('b', 2);
 * cache.set('c', 3);
 * assert(cache.has('a'), false);
 */
export class LRUCache {
	constructor(capacity = 100) {
		this.capacity = capacity;
		this.store = new Map();
	}
	get(key) {
		if (!this.store.has(key)) {
			return;
		}
		const value = this.store.get(key);
		this.store.delete(key);
		this.store.set(key, value);
		return value;
	}
	set(key, value) {
		if (this.store.has(key)) {
			this.store.delete(key);
		} else if (this.store.size >= this.capacity) {
			const oldest = this.store.keys().next().value;
			this.store.delete(oldest);
		}
		this.store.set(key, value);
		return this;
	}
	has(key) {
		return this.store.has(key);
	}
	delete(key) {
		return this.store.delete(key);
	}
	clear() {
		this.store.clear();
	}
	get size() {
		return this.store.size;
	}
}
