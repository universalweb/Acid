export class Timers {
	static create() {
		return new Timers();
	}
	list = new Map();
	/**
	 * Remove a timer that was created using the timer function.
	 *
	 * @param {Number} id - The id of the timer to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { timer, hasValue, assert } from '@universalweb/acid';
	 * assert(hasValue(timer(() => {}, 100)), true);
	 */
	remove(id) {
		clearTimeout(id);
		this.list.delete(id);
	}
	has(id) {
		return this.list.has(id);
	}
	get(id) {
		return this.list.get(id);
	}
	/**
	 * Create a timer and add it to the list of timers.
	 *
	 * @type {Function}
	 * @param {Function} callable - The function to be invoked.
	 * @param {Number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * import { timers, hasValue, assert } from '@universalweb/acid';
	 * assert(hasValue(timers.set(() => {}, 100)), true);
	 */
	set(callable, time) {
		const id = setTimeout(() => {
			callable();
			this.remove(id);
		}, time);
		this.list.set(id, true);
		return id;
	}
	/**
	 * Clear all active timers.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { timers, assert } from '@universalweb/acid';
	 * timers.clear();
	 * assert(timers.list.size, 0);
	 */
	clear() {
		for (const id of this.list.keys()) {
			this.remove(id);
		}
	}
}
export const timers = Timers.create();
/**
 * Timer wrapper.
 *
 * @function timer
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Object} - Returns setTimeoutId ID.
 *
 * @example
 * import { timer, hasValue, assert } from '@universalweb/acid';
 * assert(hasValue(timer(() => {}, 100)), true);
 */
export function timer(callable, time) {
	return timers.set(callable, time);
}
/**
 * Clears all timers tracked by the Timers registry.
 *
 * @function clearTimers
 * @category utility
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { clearTimers } from '@universalweb/acid';
 * clearTimers();
 */
export function clearTimers() {
	timers.clear();
}
