import { timer, timers } from '../utilities/timer.js';
import { apply } from '../internal/apply.js';
/**
 * Creates a debounced function that delays invoking callable until after milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
 *
 * @function debounce
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Function} - The debounced function.
 *
 * @example
 * import { debounce, promise, assert } from '@universalweb/acid';
 * const promised = promise((a) => {
 * 		const debounced = debounce(() => { debounced.clear(); a('debounced'); }, 0);
 * });
 * assert(await promised(), 'debounced');
 */
export function debounce(callable, time) {
	function debounced(...args) {
		if (debounced.id !== false) {
			timers.remove(debounced.id);
		}
		debounced.id = timer(() => {
			debounced.callable(...args);
			debounced.id = false;
		}, time);
	}
	debounced.id = false;
	debounced.callable = callable.bind(debounced);
	debounced.clear = () => {
		if (debounced.id !== false) {
			timers.remove(debounced.id);
			debounced.id = false;
		}
	};
	return debounced;
}
