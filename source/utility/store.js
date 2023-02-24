import { eachObject } from '../object/each.js';
export class Store {
	target;
	constructor(source = {}) {
		const target = this.target = source;
		if (target === null || typeof target !== 'object') {
			return target;
		}
		eachObject(target, (property) => {
			target[property] = new Store(target[property]);
		});
		this.data = new Proxy(target, {
			get(proxyTarget, property) {
				console.log(proxyTarget, property, proxyTarget[property]);
				return proxyTarget[property];
			},
			set(proxyTarget, property, value) {
				console.log(proxyTarget, property, proxyTarget[property]);
				proxyTarget[property] = new Store(value);
				return true;
			},
		});
	}
}
