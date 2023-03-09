import { construct } from '../class/construct.js';
import { truth } from './stubTrue.js';
import { falsy } from './stubFalse.js';
import { noop } from './noop.js';
import { times } from './times.js';
export class Timers {
	list = construct(Map);
	construct() {
	}
	/**
	 * Remove a timer that was created using the timer function.
	 *
	 * @param {number} id - The id of the timer to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
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
	 * @param {number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
	 * timers.set(() => {}, 100);
	 * // => 0
	 */
	set(callable, time) {
		const currentThis = this;
		const id = setTimeout(() => {
			callable();
			currentThis.remove(id);
		}, time);
		this.list.set(id, truth);
		return id;
	}
	/**
	 * Clear all active timers.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
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
 * @param {number} time - The time in milliseconds.
 * @returns {Object} - Returns setTimeoutId ID.
 *
 * @example
 * import { stubArray } from 'Acid';
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
 * import { stubArray } from 'Acid';
 * clearTimers();
 * // => undefined
 */
export function clearTimers() {
	const id = setTimeout(noop, 0);
	times(id, (index) => {
		timers.remove(index);
	});
}
