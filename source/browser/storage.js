import acid from '../namespace/index';
import { isString, hasValue } from '../internal/is';
import {stringify} from '../utility/json';
import { assign } from '../internal/object';
/**
  * A virtual storage & drop in replacement for localStorage.
  *
  * @function virtualStorage
  * @category browser
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
  * @category browser
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
  * @category browser
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
  * @category browser
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
  * @category browser
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
class VirtualStorage {
  constructor () {
    this.items = {};
  }
	getItem(key) {
		return this.items[key];
	}
	setItem(key, value) {
		this.items[key] = value;
	}
	clear() {
		this.storage.items = {};
	}
	removeItem(key) {
		this.items[key] = null;
	}
}

export function virtualCrate() {
  return new VirtualStorage();
}
function hasStorage(storeCheck) {
	try {
		storeCheck().removeItem('TESTING');
		acid.hasLocal = true;
	} catch (e) {
		acid.hasLocal = false;
	}
}
hasStorage(() => {
	return localStorage;
});
/**
  * Create a virtual storage container with localStorage support. Crate will fallback to strictly virtual storage if localStorage isn't supported. If localStorage is supported virtual storage will be used first and only fallback to localStorage when needed. Crate is ideal as a seemless drop in replacement for localStorage when the browser doesn't support or allow localStorage.
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
/**
  * Save an item to a crate.
  *
  * @function crate.setItem
  * @category browser
  * @type {Function}
  * @param {string} key - The key used to store the data.
  * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify
  * @returns {undefined} - Returns undefined.
  *
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
  *
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
  *
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
  *
  * @example
  * const storageCrate = crate();
  * storageCrate.setItem('key', 'value');
  * storageCrate.clear();
  * storageCrate.getItem('key');
  * // => undefined
*/
class Crate {
  constructor () {
    if (acid.hasLocal) {
      this.local = localStorage;
    }
    this.storage = virtualCrate();
	}
  setItem(key, value) {
    if (acid.hasLocal) {
      this.local.setItem(key, (isString(value)) ? value : stringify(value));
    }
		return this.storage.setItem(key, value);
	}
  getItem(key) {
    let item = this.storage.getItem(key);
    if (hasValue(item)) {
      return item;
    }
    if (!hasValue(item) && acid.hasLocal) {
      return this.localStore.getItem(key);
    }
	}
  clear() {
    if (acid.hasLocal) {
      this.local.clear();
    }
		this.storage.clear();
	}
  removeItem(key) {
    if (acid.hasLocal) {
      this.local.removeItem(key);
    }
		this.storage.removeItem(key);
	}
}

export function crate(virtualFlag) {
  return new Crate(virtualFlag);
}

assign(acid, {
  crate,
  virtualCrate
});
