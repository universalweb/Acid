/**
 * LocalStorage Module..
 *
 * @module browser/storage
 */
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
 * Constructs a virtual storage container with localStorage support.
 * Crate will fallback to strictly virtual storage if localStorage isn't supported.
 * If localStorage is supported virtual storage will be used first & only fallback to localStorage when needed.
 * Crate is ideal as a seemless drop in replacement for localStorage when not supported or allowed.
 *
 * @class Crate
 * @category browser
 * @returns {Crate} - Returns a new instance of Crate.
 *
 * @example
 * import { Crate, construct, assert } from './Acid.js';
 * const storageCrate = construct(Crate);
 * storageCrate.setItem('key', 'value');
 * assert(storageCrate.getItem('key'), 'value');
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
	 * @function setItem
	 * @class Crate
	 * @category browser
	 * @param {string} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { Crate, construct, assert } from './Acid.js';
	 * const storageCrate = construct(Crate);
	 * storageCrate.setItem('key', 'value');
	 * assert(storageCrate.getItem('key'), 'value');
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
	 * @function getItem
	 * @class Crate
	 * @category browser
	 * @param {string} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { Crate, construct, assert } from './Acid.js';
	 * const storageCrate = construct(Crate);
	 * storageCrate.setItem('key', 'value');
	 * assert(storageCrate.getItem('key'), 'value');
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
	 * @function clear
	 * @class Crate
	 * @category browser
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { Crate, construct, assert } from './Acid.js';
	 * const storageCrate = construct(Crate);
	 * storageCrate.setItem('key', 'value');
	 * assert(storageCrate.getItem('key'), 'value');
	 * storageCrate.clear();
	 * assert(storageCrate.getItem('key'), undefined);
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
	 * @class Crate
	 * @category browser
	 * @function removeItem
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { Crate, construct, assert } from './Acid.js';
	 * const storageCrate = construct(Crate);
	 * storageCrate.setItem('key', 'value');
	 * assert(storageCrate.getItem('key'), 'value');
	 * storageCrate.removeItem('key');
	 * assert(storageCrate.getItem('key'), undefined);
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

