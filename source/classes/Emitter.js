/**
 * Tiny event emitter. Supports on/once/off/emit and chainable returns.
 *
 * @class Emitter
 * @category class
 *
 * @example
 * import { Emitter } from '@universalweb/acid';
 * const bus = new Emitter();
 * bus.on('greet', (recipient) => console.log(`hello ${recipient}`));
 * bus.emit('greet', 'world');
 */
export class Emitter {
	constructor() {
		this.listeners = new Map();
	}
	on(eventName, handler) {
		const handlers = this.listeners.get(eventName);
		if (handlers) {
			handlers.push(handler);
		} else {
			this.listeners.set(eventName, [handler]);
		}
		return this;
	}
	once(eventName, handler) {
		const wrappedHandler = (...handlerArgs) => {
			this.off(eventName, wrappedHandler);
			handler(...handlerArgs);
		};
		return this.on(eventName, wrappedHandler);
	}
	off(eventName, handler) {
		const handlers = this.listeners.get(eventName);
		if (!handlers) {
			return this;
		}
		if (!handler) {
			this.listeners.delete(eventName);
			return this;
		}
		const remaining = handlers.filter((registered) => registered !== handler);
		if (remaining.length) {
			this.listeners.set(eventName, remaining);
		} else {
			this.listeners.delete(eventName);
		}
		return this;
	}
	emit(eventName, ...handlerArgs) {
		const handlers = this.listeners.get(eventName);
		if (!handlers) {
			return false;
		}
		for (const handler of [...handlers]) {
			handler(...handlerArgs);
		}
		return true;
	}
	clear() {
		this.listeners.clear();
	}
}
