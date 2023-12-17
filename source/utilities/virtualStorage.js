import { cloneType } from '../types/cloneType';
import { hasValue } from '../types/hasValue.js';
/**
 * Class representing a virtual storage interface over a provided object the default being a Map. A temporary storage shim for localStorage if not available.
 *
 * @function VirtualStorage
 * @category utility
 * @param {*} initialObject - Initial object to be used as the storage object the default being a Map.
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { VirtualStorage } from '@universalweb/acid';
 * const myVirtualStorage = new VirtualStorage();
 * // => New VirtualStorage Object
 */
export class VirtualStorage {
	constructor(initialObject = new Map()) {
		this.items = initialObject;
	}
	/**
	 * Get an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.getItem('key');
	 * // => 'value'
	 */
	getItem(key) {
		if (this.isMap) {
			return this.items.get(key);
		} else {
			return this.items[key];
		}
	}
	get(...args) {
		return this.getItem(...args);
	}
	hasItem(key) {
		if (this.isMap) {
			return this.items.has(key);
		} else {
			return hasValue(this.items[key]);
		}
	}
	has(...args) {
		return this.hasItem(...args);
	}
	/**
	 * Save an item to a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const vStorage = new VirtualStorage();
	 * vStorage.setItem('title', 'value');
	 * assert(vStorage.getItem('title'), 'value');
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
	 * Clears all data from the virtual storage object by replacing with a new object.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.clear();
	 * myVirtualStorage.getItem('key');
	 * // => undefined
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
	 * Remove an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.removeItem('key');
	 * myVirtualStorage.getItem('key');
	 * // => undefined
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
/**
 * Returns an instance of VirtualStorage which represents a standard virtual storage interface over a provided object the default being a Map. A temporary storage shim for localStorage if not available.
 *
 * @function virtualStorage
 * @category browser
 * @type {Function}
 * @param {*} initialObject - Initial object to be used as the storage object the default being a Map.
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { virtualStorage, assert } from '@universalweb/acid';
 * const vStorage = virtualStorage();
 * vStorage.setItem('title', 'value');
 * assert(vStorage.getItem('title'), 'value');
 */
export function virtualStorage(initialObject) {
	return new VirtualStorage(initialObject);
}

