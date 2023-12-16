import { timer, timers } from '../utilities/timer.js';
import { falsy } from '../utilities/stubFalse.js';
import { truth } from '../utilities/stubTrue.js';
/**
 * Creates a throttled function that only invokes callable at most once per every milliseconds. The throttle function has a clear method to cancel the timer.
 *
 * @function throttle
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Function|undefined} - The throttled function.
 *
 * @example
 * const throttled = throttle(() => { console.log('throttle'); }, 0)();
 * throttled();
 * // 'throttle'
 */
export function throttle(callable, time) {
	function throttled(...args) {
		if (throttled.id) {
			throttled.shouldThrottle = truth;
			return;
		}
		throttled.callable(...args);
		throttled.id = timer(() => {
			if (throttled.shouldThrottle) {
				throttled.callable(...args);
			}
			throttled.id = falsy;
		}, time);
	}
	throttled.id = falsy;
	throttled.callable = callable.bind(throttled);
	throttled.clear = () => {
		timers.remove(throttled.id);
		throttled.id = falsy;
	};
	return throttled;
}

