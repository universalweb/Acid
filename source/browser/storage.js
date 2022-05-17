import { hasValue, isString } from '../internal/is';
import { stringify } from '../utility/json';
import { virtualStorage } from '../utility/storage';
/**
 * Create a virtual storage container with localStorage support. Crate will fallback to strictly virtual storage if localStorage isn't supported. If localStorage is supported virtual storage will be used first and only fallback to localStorage when needed. Crate is ideal as a seemless drop in replacement for localStorage when the browser doesn't support or allow localStorage.
 * The crate function is a factory which wraps the Crate constructor & returns it.
 * Direct class/constructor access is named Crate.
 *
 * @function crate
 * @category browser
 * @type {Function}
 * @returns {*} - Returns a new Crate Object.
 * @example
 * const storageCrate = crate();
 * // => New Crate Object
 */
/**
 * Save an item to a crate.
 *
 * @function crate.setItem
 * @category browser
 * @type {Function}
 * @param {string} key - The key used to store the data.
 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
 * @returns {undefined} - Returns undefined.
 * @example
 * const storageCrate = crate();
 * storageCrate.setItem('key', 'value');
 * // => undefined
 */
/**
 * Get an item from a crate.
 *
 * @function crate.getItem
 * @category browser
 * @type {Function}
 * @param {string} key - The key used to store the data.
 * @returns {undefined} - Returns undefined.
 * @example
 * const storageCrate = crate();
 * storageCrate.setItem('key', 'value');
 * storageCrate.getItem('key');
 * // => 'value'
 */
/**
 * Remove an item from a crate.
 *
 * @function crate.removeItem
 * @category browser
 * @type {Function}
 * @param {string} key - The key used to remove data.
 * @returns {undefined} - Returns undefined.
 * @example
 * const storageCrate = crate();
 * storageCrate.setItem('key', 'value');
 * storageCrate.removeItem('key');
 * storageCrate.getItem('key');
 * // => undefined
 */
/**
 * Clears all data for the crate including all of localStorage if supported.
 *
 * @function crate.clear
 * @category browser
 * @type {Function}
 * @param {string} key - The key used to remove data.
 * @returns {undefined} - Returns undefined.
 * @example
 * const storageCrate = crate();
 * storageCrate.setItem('key', 'value');
 * storageCrate.clear();
 * storageCrate.getItem('key');
 * // => undefined
 */
export let hasLocal;
function hasStorage(storeCheck) {
	try {
		storeCheck().removeItem('TESTING');
		hasLocal = true;
	} catch (e) {
		hasLocal = false;
	}
}
hasStorage(() => {
	return localStorage;
});
export class Crate {
	constructor(initialObject) {
		if (this.hasLocal) {
			this.local = localStorage;
		}
		this.storage = virtualStorage(initialObject);
	}
	hasLocal = hasLocal;
	setItem(key, value) {
		if (this.hasLocal) {
			this.local.setItem(key, (isString(value)) ? value : stringify(value));
		}
		return this.storage.setItem(key, value);
	}
	getItem(key) {
		const item = this.storage.getItem(key);
		if (hasValue(item)) {
			return item;
		}
		if (!hasValue(item) && this.hasLocal) {
			return this.local.getItem(key);
		}
	}
	clear() {
		if (this.hasLocal) {
			this.local.clear();
		}
		this.storage.clear();
	}
	removeItem(key) {
		if (this.hasLocal) {
			this.local.removeItem(key);
		}
		this.storage.removeItem(key);
	}
}
export function crate(virtualFlag) {
	return new Crate(virtualFlag);
}

