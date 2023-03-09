import { truth } from '../utility/stubTrue.js';
import { falsy } from '../utility/stubFalse.js';
import { timer, timers } from '../utility/timer.js';
import { apply } from '../internal/apply.js';
/**
  * Creates a debounced function that delays invoking callable until after milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
  *
  * @function debounce
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} - The debounced function.
  *
  * @example
  * const debounced = debounce(() => { console.log('debounced'); }, 0);
  * debounced();
  * // 'debounced'
*/
export function debounce(callable, time) {
	function debounced(...args) {
		if (debounced.id !== falsy) {
			timers.remove(debounced.id);
		}
		debounced.id = timer(() => {
			debounced.callable(...args);
			debounced.id = falsy;
		}, time);
	}
	debounced.id = falsy;
	debounced.callable = callable.bind(debounced);
	debounced.clear = () => {
		if (debounced.id !== falsy) {
			timers.remove(debounced.id);
			debounced.id = falsy;
		}
	};
	return debounced;
}