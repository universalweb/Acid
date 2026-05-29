import { timer, timers } from '../utilities/timer.js';
/**
 * Debounces a callable so it only fires after `time` ms have elapsed since the last `run()` invocation. Pending invocations can be canceled via `clear()`. Each instance is weakly tracked by `Debouncer.instances`, allowing `Debouncer.clearAll()` to cancel every live debouncer without affecting other timers.
 *
 * @class Debouncer
 * @category function
 *
 * @example
 * import { Debouncer, assert } from '@universalweb/acid';
 * const result = await new Promise((resolve) => {
 *   const debouncer = Debouncer.create(() => resolve('debounced'), 0);
 *   debouncer.run();
 * });
 * assert(result, 'debounced');
 */
export class Debouncer {
	static instances = new Set();
	static create(callable, time) {
		const instance = new Debouncer(callable, time);
		Debouncer.instances.add(new WeakRef(instance));
		return instance;
	}
	/**
	 * Clears the pending invocation on every live `Debouncer` instance. Prunes any registry entries whose targets were garbage-collected. Other (non-debounce) timers are not touched.
	 *
	 * @function clearAll
	 * @category function
	 * @returns {Number} - Count of debouncers that were live and cleared.
	 *
	 * @example
	 * import { Debouncer, assert } from '@universalweb/acid';
	 * const debouncer = Debouncer.create(() => {}, 1000);
	 * debouncer.run();
	 * const cleared = Debouncer.clearAll();
	 * assert(cleared >= 1, true);
	 */
	static clearAll() {
		const stillAlive = new Set();
		let clearedCount = 0;
		for (const reference of Debouncer.instances) {
			const instance = reference.deref();
			if (instance) {
				instance.clear();
				stillAlive.add(reference);
				clearedCount++;
			}
		}
		Debouncer.instances = stillAlive;
		return clearedCount;
	}
	id = false;
	constructor(callable, time) {
		this.callable = callable;
		this.time = time;
	}
	run(...args) {
		if (this.id !== false) {
			timers.remove(this.id);
		}
		this.pendingArgs = args;
		this.id = timer(() => {
			this.callable(...this.pendingArgs);
			this.id = false;
		}, this.time);
	}
	clear() {
		if (this.id !== false) {
			timers.remove(this.id);
			this.id = false;
		}
	}
}
