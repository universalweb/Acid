import { timer, timers } from '../utilities/timer.js';
/**
 * Throttles a callable so it fires at most once per `time` ms window. A trailing call is queued when `run()` is invoked during the cooldown. Each instance is weakly tracked by `Throttler.instances`, allowing `Throttler.clearAll()` to cancel every live throttler without affecting other timers.
 *
 * @class Throttler
 * @category function
 *
 * @example
 * import { Throttler, assert } from '@universalweb/acid';
 * let calls = 0;
 * const throttler = Throttler.create(() => { calls++; }, 50);
 * throttler.run(); throttler.run(); throttler.run();
 * assert(calls, 1);
 */
export class Throttler {
	static instances = new Set();
	static create(callable, time) {
		const instance = new Throttler(callable, time);
		Throttler.instances.add(new WeakRef(instance));
		return instance;
	}
	/**
	 * Clears the pending trailing call on every live `Throttler` instance. Prunes registry entries whose targets were garbage-collected. Other (non-throttle) timers are not touched.
	 *
	 * @function clearAll
	 * @category function
	 * @returns {Number} - Count of throttlers that were live and cleared.
	 *
	 * @example
	 * import { Throttler, assert } from '@universalweb/acid';
	 * const throttler = Throttler.create(() => {}, 1000);
	 * throttler.run();
	 * const cleared = Throttler.clearAll();
	 * assert(cleared >= 1, true);
	 */
	static clearAll() {
		const stillAlive = new Set();
		let clearedCount = 0;
		for (const reference of Throttler.instances) {
			const instance = reference.deref();
			if (instance) {
				instance.clear();
				stillAlive.add(reference);
				clearedCount++;
			}
		}
		Throttler.instances = stillAlive;
		return clearedCount;
	}
	id = false;
	shouldThrottle = false;
	constructor(callable, time) {
		this.callable = callable;
		this.time = time;
	}
	run(...args) {
		if (this.id) {
			this.shouldThrottle = true;
			this.pendingArgs = args;
			return;
		}
		this.callable(...args);
		this.pendingArgs = args;
		this.id = timer(() => {
			if (this.shouldThrottle) {
				this.callable(...this.pendingArgs);
				this.shouldThrottle = false;
			}
			this.id = false;
		}, this.time);
	}
	clear() {
		if (this.id) {
			timers.remove(this.id);
			this.id = false;
		}
		this.shouldThrottle = false;
	}
}
