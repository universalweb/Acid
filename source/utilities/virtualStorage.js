/**
 * Class representing a virtual storage. A drop in replacement for localStorage.
 * The virtualStorage function is a factory which wraps the VirtualStorage constructor & returns it.
 * Direct class/constructor access is named VirtualStorage.
 *
 * @category utility
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { virtualStorage } from 'Acid';
 * const myVirtualStorage = virtualStorage();
 * // => New Crate Object
 */
export class VirtualStorage {
	constructor(initialObject = {}) {
		this.items = initialObject;
	}
	/**
	 * Get an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.getItem('key');
	 * // => 'value'
	 */
	getItem(key) {
		return this.items[key];
	}
	/**
	 * Save an item to a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage, assert } from 'Acid';
	 * const vStorage = new VirtualStorage();
	 * vStorage.setItem('title', 'value');
	 * assert(vStorage.getItem('title'), 'value');
	 */
	setItem(key, value) {
		this.items[key] = value;
	}
	/**
	 * Clears all data from the virtual storage object by replacing with a new object.
	 *
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.clear();
	 * myVirtualStorage.getItem('key');
	 * // => undefined
	 */
	clear() {
		this.items = {};
	}
	/**
	 * Remove an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.removeItem('key');
	 * myVirtualStorage.getItem('key');
	 * // => undefined
	 */
	removeItem(key) {
		this.items[key] = null;
	}
}
/**
 *  The virtualStorage function is a factory which wraps the VirtualStorage class constructor.
 *
 * @function virtualStorage
 * @category browser
 * @type {Function}
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { virtualStorage, assert } from 'Acid';
 * const vStorage = virtualStorage();
 * vStorage.setItem('title', 'value');
 * assert(vStorage.getItem('title'), 'value');
 */
export function virtualStorage(initialObject) {
	return new VirtualStorage(initialObject);
}

