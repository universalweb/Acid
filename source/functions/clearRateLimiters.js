import { Debouncer } from './debounce.js';
import { Throttler } from './throttle.js';
/**
 * Cancels every pending invocation across all live `Debouncer` and `Throttler` instances in a single call. Other timers managed by `timers` are not affected. Useful on route changes, component unmount, or test teardown when only rate-limiter state should be wiped.
 *
 * @function clearAllRateLimiters
 * @category function
 * @type {Function}
 * @returns {Object} - `{debouncers, throttlers}` with the count cleared in each registry.
 *
 * @example
 * import { Debouncer, Throttler, clearAllRateLimiters, assert } from '@universalweb/acid';
 * Debouncer.create(() => {}, 1000).run();
 * Throttler.create(() => {}, 1000).run();
 * const cleared = clearAllRateLimiters();
 * assert(cleared.debouncers >= 1, true);
 * assert(cleared.throttlers >= 1, true);
 */
export function clearAllRateLimiters() {
	return {
		debouncers: Debouncer.clearAll(),
		throttlers: Throttler.clearAll(),
	};
}
