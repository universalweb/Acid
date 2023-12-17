import { construct } from '../classes/construct.js';
import { noop } from './noop.js';
import { times } from './times.js';
export class Timers {
	list = construct(Map);
	construct() {
	}
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
 * Clear all active timers.
 *
 * @function clearTimers
 * @category function
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { clearTimers, assert } from '@universalweb/acid';
 * clearTimers();
 * // => undefined
 */
export function clearTimers() {
	const id = setTimeout(noop, 0);
	times(id, (index) => {
		timers.remove(index);
	});
}
