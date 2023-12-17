import { construct } from '../classes/construct.js';
import { noop } from './noop.js';
import { times } from './times.js';
export class Intervals {
	list = construct(Map);
	construct() {
	}
	/**
	 * Remove a setInterval that was created using the intervals function.
	 *
	 * @param {Number} id - The id of the setInterval to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * timer(() => {}, 100);
	 * // => 0
	 */
	remove(id) {
		clearInterval(id);
		this.list.delete(id);
	}
	has(id) {
		return this.list.has(id);
	}
	get(id) {
		return this.list.get(id);
	}
	/**
	 * Create a setInterval & add it to the list of interval timers.
	 *
	 * @type {Function}
	 * @param {Function} callable - The function to be invoked.
	 * @param {Number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * timers.set(() => {}, 100);
	 * // => 0
	 */
	set(callable, time) {
		const currentThis = this;
		const id = setInterval(() => {
			callable();
		}, time);
		this.list.set(id, true);
		return id;
	}
	/**
	 * Clear all active setIntervals.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * intervals.clear();
	 * // => undefined
	 */
	clear() {
		const currentThis = this;
		currentThis.list.forEach((id) => {
			currentThis.remove(id);
		});
	}
}
export const intervals = construct(Intervals);
/**
 * Create an interval timer.
 *
 * @function interval
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Object} - Returns setInterval ID.
 *
 * @example
 * interval(() => {}, 100);
 * // => 0
 */
export function interval(callable, time) {
	return intervals.set(callable, time);
}
/**
 * Clear all active interval timers.
 *
 * @function clearIntervals
 * @category function
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * clearIntervals();
 * // => undefined
 */
export function clearIntervals() {
	const id = setTimeout(noop, 0);
	times(id, (index) => {
		intervals.remove(index);
	});
}
