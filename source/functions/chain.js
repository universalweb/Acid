import { assign } from '../objects/assign.js';
import { construct } from '../classes/construct.js';
import { each } from '../utilities/each.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isPlainObject } from '../types/isPlainObject.js';
export class Chain {
	constructor(methods) {
		this.addChainMethod(methods);
	}
	addChainMethod(methods) {
		const thisChain = this;
		each(methods, (method, methodName) => {
			thisChain[methodName] = function(...args) {
				this.value = method.call(thisChain, thisChain.value, ...args);
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
/**
 * Creates a chainable set of functions.
 *
 * @function chain
 * @category function
 * @type {Function}
 * @param {Array|Object} config - The object to take methods from.
 * @returns {*} - Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
 *
 * @example
 * import { chain, assert } from '@universalweb/acid';
 * const chained = chain({
 * 	a(value, c) {
 * 		return value + c;
 * 	}
 * }).setValue(2).a(1).done();
 * assert(chained, 3);
 */
export function chain(config) {
	return construct(Chain, [config]);
}

