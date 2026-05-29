import { each } from '../utilities/each.js';
/**
 * Creates a chainable set of functions over a shared `value`. Each registered method is invoked with the current `value` as the first argument, followed by user args. Returns the chain so calls compose, ending with `done()`.
 *
 * @class Chain
 * @category function
 *
 * @example
 * import { Chain, assert } from '@universalweb/acid';
 * const chained = Chain.create({
 * 	a(value, c) {
 * 		return value + c;
 * 	}
 * }).setValue(2).a(1).done();
 * assert(chained, 3);
 */
export class Chain {
	static create(methods) {
		return new Chain(methods);
	}
	constructor(methods) {
		this.addChainMethod(methods);
	}
	addChainMethod(methods) {
		const thisChain = this;
		each(methods, (method, methodName) => {
			thisChain[methodName] = function chainStep(...args) {
				thisChain.value = method(thisChain.value, ...args);
				return thisChain;
			};
		});
	}
	setValue(value) {
		this.value = value;
		return this;
	}
	done() {
		const value = this.value;
		this.value = null;
		return value;
	}
	value = null;
}

