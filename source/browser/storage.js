/**
 * LocalStorage Module..
 *
 * @module browser/storage
 */
import { hasValue } from '../types/hasValue.js';
import { isString } from '../types/isString.js';
import { stringify } from '../utilities/json.js';
import { virtualStorage } from '../utilities/virtualStorage.js';
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
 * Constructs a virtual storage container with localStorage support.
 * BrowserStorage will fallback to strictly virtual storage if localStorage isn't supported.
 * If localStorage is supported virtual storage will be used first & only fallback to localStorage when needed.
 * BrowserStorage is ideal as a seemless drop in replacement for localStorage when not supported or allowed.
 *
 * @class BrowserStorage
 * @category browser
 * @returns {BrowserStorage} - Returns a new instance of BrowserStorage.
 *
 * @example
 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
 * const storageBrowserStorage = construct(BrowserStorage);
 * storageBrowserStorage.setItem('key', 'value');
 * assert(storageBrowserStorage.getItem('key'), 'value');
 */
export class BrowserStorage {
	constructor(initialObject) {
		if (this.hasLocal) {
			this.local = localStorage;
		}
		this.storage = virtualStorage(initialObject);
	}
	hasLocal = hasLocal;
	/**
	 * Save an item to a browserStorage.
	 *
	 * @function setItem
	 * @class BrowserStorage
	 * @category browser
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 */
	setItem(key, value) {
		if (this.hasLocal) {
			this.local.setItem(key, (isString(value)) ? value : stringify(value));
		}
		return this.storage.setItem(key, value);
	}
	/**
	 * Get an item from a browserStorage.
	 *
	 * @function getItem
	 * @class BrowserStorage
	 * @category browser
	 * @param {String} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
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
	 * Clears all data for the browserStorage including all of localStorage if supported.
	 *
	 * @function clear
	 * @class BrowserStorage
	 * @category browser
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 * storageBrowserStorage.clear();
	 * assert(storageBrowserStorage.getItem('key'), undefined);
	 */
	clear() {
		if (this.hasLocal) {
			this.local.clear();
		}
		this.storage.clear();
	}
	/**
	 * Remove an item from a browserStorage.
	 *
	 * @class BrowserStorage
	 * @category browser
	 * @function removeItem
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 * storageBrowserStorage.removeItem('key');
	 * assert(storageBrowserStorage.getItem('key'), undefined);
	 */
	removeItem(key) {
		if (this.hasLocal) {
			this.local.removeItem(key);
		}
		this.storage.removeItem(key);
	}
}
/**
 * The browserStorage function is a factory which wraps the BrowserStorage class constructor.
 *
 * @function browserStorage
 * @category browser
 * @type {Function}
 * @returns {*} - Returns a new BrowserStorage Object.
 *
 * @example
 * const storageBrowserStorage = browserStorage();
 * // => New BrowserStorage Object
 */
export function browserStorage(virtualFlag) {
	return new BrowserStorage(virtualFlag);
}

