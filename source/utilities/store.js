import { eachObject } from '../objects/each.js';
import { isPlainObject } from '../types/isPlainObject.js';
const proxyHandler = {
	get(proxySource, property) {
		return proxySource[property];
	},
	set(proxySource, property, value) {
		proxySource[property] = isPlainObject(value) ? Store.create(value) : value;
		return true;
	},
};
/**
 * Reactive store backed by a Proxy. Nested plain-object branches are wrapped recursively so writes anywhere in the tree go through `proxyHandler`. Read `.data` to interact with the proxied tree; `.source` exposes the underlying object.
 *
 * @class Store
 * @category utility
 *
 * @example
 * import { Store, assert } from '@universalweb/acid';
 * const store = Store.create({a: 1});
 * store.data.a = 2;
 * assert(store.source.a, 2);
 */
export class Store {
	static create(source = {}) {
		return new Store(source);
	}
	constructor(source = {}) {
		this.source = source;
		if (!isPlainObject(source)) {
			return;
		}
		eachObject(source, (value, key) => {
			if (isPlainObject(value)) {
				source[key] = Store.create(value);
			}
		});
		this.data = new Proxy(source, proxyHandler);
	}
}
