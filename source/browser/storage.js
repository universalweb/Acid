import { hasValue } from '../type/hasValue.js';
import { isString } from '../type/isString.js';
import { stringify } from '../utility/json.js';
import { virtualStorage } from '../utility/virtualStorage.js';
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
/**
 * Class which creates a virtual storage container with localStorage support.
 * Crate will fallback to strictly virtual storage if localStorage isn't supported.
 * If localStorage is supported virtual storage will be used first & only fallback to localStorage when needed.
 * Crate is ideal as a seemless drop in replacement for localStorage when not supported or allowed.
 */
export class Crate {
	constructor(initialObject) {
		if (this.hasLocal) {
			this.local = localStorage;
		}
		this.storage = virtualStorage(initialObject);
	}
	hasLocal = hasLocal;
	/**
	 * Save an item to a crate.
	 *
	 * @param {string} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * const storageCrate = crate();
	 * storageCrate.setItem('key', 'value');
	 * // => undefined
	 */
	setItem(key, value) {
		if (this.hasLocal) {
			this.local.setItem(key, (isString(value)) ? value : stringify(value));
		}
		return this.storage.setItem(key, value);
	}
	/**
	 * Get an item from a crate.
	 *
	 * @param {string} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * const storageCrate = crate();
	 * storageCrate.setItem('key', 'value');
	 * storageCrate.getItem('key');
	 * // => 'value'
	 */
	getItem(key) {
		const item = this.storage.getItem(key);
		if (hasValue(item)) {
			return item;
		}
		if (!hasValue(item) && this.hasLocal) {
			return this.local.getItem(key);
		}
	}
	/**
	 * Clears all data for the crate including all of localStorage if supported.
	 *
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * const storageCrate = crate();
	 * storageCrate.setItem('key', 'value');
	 * storageCrate.clear();
	 * storageCrate.getItem('key');
	 * // => undefined
	 */
	clear() {
		if (this.hasLocal) {
			this.local.clear();
		}
		this.storage.clear();
	}
	/**
	 * Remove an item from a crate.
	 *
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * const storageCrate = crate();
	 * storageCrate.setItem('key', 'value');
	 * storageCrate.removeItem('key');
	 * storageCrate.getItem('key');
	 * // => undefined
	 */
	removeItem(key) {
		if (this.hasLocal) {
			this.local.removeItem(key);
		}
		this.storage.removeItem(key);
	}
}
/**
 *  The crate function is a factory which wraps the Crate class constructor.
 *
 * @function crate
 * @category browser
 * @type {Function}
 * @returns {*} - Returns a new Crate Object.
 *
 * @example
 * const storageCrate = crate();
 * // => New Crate Object
 */
export function crate(virtualFlag) {
	return new Crate(virtualFlag);
}

