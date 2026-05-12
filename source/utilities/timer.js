import { construct } from '../classes/construct.js';
export class Timers {
	list = construct(Map);
	/**
	 * Remove a timer that was created using the timer function.
	 *
	 * @param {Number} id - The id of the timer to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { timer, assert } from '@universalweb/acid';
	 * timer(() => {}, 100);
	 * // => 0
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
	 * import { timers, assert } from '@universalweb/acid';
	 * timers.set(() => {}, 100);
	 * // => 0
	 */
	set(callable, time) {
		const currentThis = this;
		const id = setTimeout(() => {
			callable();
			currentThis.remove(id);
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
	 * // => undefined
	 */
	clear() {
		const currentThis = this;
		currentThis.list.forEach((id) => {
			currentThis.remove(id);
		});
	}
}
export const timers = construct(Timers);
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
 * import { timer, assert } from '@universalweb/acid';
 * timer(() => {}, 100);
 * // => 0
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
