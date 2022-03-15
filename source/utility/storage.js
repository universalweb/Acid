/**
  * A virtual storage & drop in replacement for localStorage.
  * The virtualStorage function is a factory which wraps the VirtualStorage constructor & returns it.
  * Direct class/constructor access is named VirtualStorage.
  *
  * @function virtualStorage
  * @category utility
  * @type {Function}
  * @returns {*} - Returns a new VirtualStorage Object.
  *
  * @example
  * const myVirtualStorage = virtualStorage();
  * // => New Crate Object
*/
/**
  * Save an item to a virtual storage object.
  *
  * @function virtualStorage.setItem
  * @category utility
  * @type {Function}
  * @param {string} key - The key used to store the data.
  * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * const myVirtualStorage = virtualStorage();
  * myVirtualStorage.setItem('key', 'value');
  * // => undefined
*/
/**
  * Get an item from a virtual storage object.
  *
  * @function virtualStorage.getItem
  * @category utility
  * @type {Function}
  * @param {string} key - The key used to store the data.
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * const myVirtualStorage = virtualStorage();
  * myVirtualStorage.setItem('key', 'value');
  * myVirtualStorage.getItem('key');
  * // => 'value'
*/
/**
  * Remove an item from a virtual storage object.
  *
  * @function virtualStorage.removeItem
  * @category utility
  * @type {Function}
  * @param {string} key - The key used to remove data.
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * const myVirtualStorage = virtualStorage();
  * myVirtualStorage.setItem('key', 'value');
  * myVirtualStorage.removeItem('key');
  * myVirtualStorage.getItem('key');
  * // => undefined
*/
/**
  * Clears all data from the virtual storage object by replacing with a new object.
  *
  * @function virtualStorage.clear
  * @category utility
  * @type {Function}
  * @param {string} key - The key used to remove data.
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * const myVirtualStorage = virtualStorage();
  * myVirtualStorage.setItem('key', 'value');
  * myVirtualStorage.clear();
  * myVirtualStorage.getItem('key');
  * // => undefined
*/
export class VirtualStorage {
	constructor(initialObject = {}) {
		this.items = initialObject;
	}
	getItem(key) {
		return this.items[key];
	}
	setItem(key, value) {
		this.items[key] = value;
	}
	clear() {
		this.items = {};
	}
	removeItem(key) {
		this.items[key] = null;
	}
}
export function virtualStorage() {
	return new VirtualStorage();
}

