import { eachObject } from '../object/each.js';
export class Store {
	source;
	constructor(source = {}) {
		this.source = source;
		if (source === null || typeof source !== 'object') {
			return source;
		}
		eachObject(source, (property) => {
			source[property] = new Store(source[property]);
		});
		this.data = new Proxy(source, {
			get(proxySource, property) {
				console.log(proxySource, property, proxySource[property]);
				return proxySource[property];
			},
			set(proxySource, property, value) {
				console.log(proxySource, property, proxySource[property]);
				proxySource[property] = new Store(value);
				return true;
			},
		});
	}
}
