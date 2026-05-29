export class Intervals {
	static create() {
		return new Intervals();
	}
	list = new Map();
	/**
	 * Remove a setInterval that was created using the intervals function.
	 *
	 * @param {Number} id - The id of the setInterval to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { intervals } from '@universalweb/acid';
	 * const id = intervals.set(() => {}, 100);
	 * intervals.remove(id);
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
	 * import { intervals } from '@universalweb/acid';
	 * const id = intervals.set(() => {}, 100);
	 * intervals.remove(id);
	 */
	set(callable, time) {
		const id = setInterval(callable, time);
		this.list.set(id, true);
		return id;
	}
	/**
	 * Clear all active setIntervals.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { intervals } from '@universalweb/acid';
	 * intervals.clear();
	 */
	clear() {
		for (const id of this.list.keys()) {
			this.remove(id);
		}
	}
}
export const intervals = Intervals.create();
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
 * import { interval, clearIntervals } from '@universalweb/acid';
 * const id = interval(() => {}, 100);
 * clearIntervals();
 */
export function interval(callable, time) {
	return intervals.set(callable, time);
}
/**
 * Clears all intervals tracked by the Intervals registry.
 *
 * @function clearIntervals
 * @category utility
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { clearIntervals } from '@universalweb/acid';
 * clearIntervals();
 */
export function clearIntervals() {
	intervals.clear();
}
