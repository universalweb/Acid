/**
 * Tiny event emitter. Supports on/once/off/emit and chainable returns.
 *
 * @class Emitter
 * @category class
 *
 * @example
 * import { Emitter } from '@universalweb/acid';
 * const bus = Emitter.create();
 * bus.on('greet', (recipient) => console.log(`hello ${recipient}`));
 * bus.emit('greet', 'world');
 */
class OnceHandler {
	constructor(emitter, eventName, handler) {
		this.emitter = emitter;
		this.eventName = eventName;
		this.handler = handler;
	}
	invoke(...handlerArgs) {
		this.emitter.off(this.eventName, this);
		this.handler(...handlerArgs);
	}
}
export class Emitter {
	static create() {
		return new Emitter();
	}
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
		const wrapper = new OnceHandler(this, eventName, handler);
		return this.on(eventName, wrapper);
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
		const snapshot = [...handlers];
		const snapshotLength = snapshot.length;
		for (let handlerIndex = 0; handlerIndex < snapshotLength; handlerIndex++) {
			const registered = snapshot[handlerIndex];
			if (registered instanceof OnceHandler) {
				registered.invoke(...handlerArgs);
			} else {
				registered(...handlerArgs);
			}
		}
		return true;
	}
	clear() {
		this.listeners.clear();
	}
}
