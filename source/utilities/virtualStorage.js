import { cloneType } from '../types/cloneType.js';
import { hasValue } from '../types/hasValue.js';
/**
 * Virtual storage interface over a provided object. Defaults to a Map. Acts as a temporary storage shim for localStorage when not available.
 *
 * @class VirtualStorage
 * @category utility
 * @param {*} initialObject - Initial object to be used as the storage object the default being a Map.
 * @returns {VirtualStorage} - Returns a new VirtualStorage instance.
 *
 * @example
 * import { VirtualStorage, assert } from '@universalweb/acid';
 * const store = VirtualStorage.create();
 * store.setItem('key', 'value');
 * assert(store.getItem('key'), 'value');
 */
export class VirtualStorage {
	static create(initialObject) {
		return new VirtualStorage(initialObject);
	}
	constructor(initialObject = new Map()) {
		this.items = initialObject;
		this.isMap = initialObject instanceof Map;
	}
	/**
	 * Get an item from the virtual storage.
	 *
	 * @param {String} key - The key used to store the data.
	 * @returns {*} - Stored value or undefined.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const store = VirtualStorage.create();
	 * store.setItem('key', 'value');
	 * assert(store.getItem('key'), 'value');
	 */
	getItem(key) {
		if (this.isMap) {
			return this.items.get(key);
		}
		return this.items[key];
	}
	get(...args) {
		return this.getItem(...args);
	}
	hasItem(key) {
		if (this.isMap) {
			return this.items.has(key);
		}
		return hasValue(this.items[key]);
	}
	has(...args) {
		return this.hasItem(...args);
	}
	/**
	 * Save an item to the virtual storage.
	 *
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - Value to store.
	 * @returns {VirtualStorage} - Returns this instance.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const store = VirtualStorage.create();
	 * store.setItem('title', 'value');
	 * assert(store.getItem('title'), 'value');
	 */
	setItem(key, value) {
		if (this.isMap) {
			this.items.set(key, value);
		} else {
			this.items[key] = value;
		}
		return this;
	}
	set(...args) {
		return this.setItem(...args);
	}
	/**
	 * Clears all data from the virtual storage.
	 *
	 * @returns {VirtualStorage} - Returns this instance.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const store = VirtualStorage.create();
	 * store.setItem('key', 'value');
	 * store.clear();
	 * assert(store.getItem('key'), undefined);
	 */
	clear() {
		if (this.isMap) {
			this.items.clear();
		} else {
			this.items = cloneType(this.items);
		}
		return this;
	}
	/**
	 * Remove an item from the virtual storage.
	 *
	 * @param {String} key - The key used to remove data.
	 * @returns {VirtualStorage} - Returns this instance.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const store = VirtualStorage.create();
	 * store.setItem('key', 'value');
	 * store.removeItem('key');
	 * assert(store.getItem('key'), undefined);
	 */
	removeItem(key) {
		if (this.isMap) {
			this.items.delete(key);
		} else {
			this.items[key] = null;
		}
		return this;
	}
	remove(...args) {
		return this.removeItem(...args);
	}
}
