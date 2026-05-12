import { delay } from './delay.js';
/**
 * Invokes an async function, retrying on rejection up to `attempts` times with optional backoff delay.
 *
 * @function retry
 * @category utility
 * @async
 * @type {Function}
 * @param {Function} method - The async function to invoke.
 * @param {Object} [options] - Retry options.
 * @param {Number} [options.attempts=3] - Total attempts including the first.
 * @param {Number} [options.wait=0] - Initial wait between attempts (ms).
 * @param {Number} [options.factor=1] - Multiplier applied to wait between attempts (e.g. 2 for exponential).
 * @returns {Promise} - Resolves with the method's value or rejects with the last error.
 *
 * @example
 * import { retry, assert } from '@universalweb/acid';
 * let attempts = 0;
 * const result = await retry(async () => {
 *   attempts++;
 *   if (attempts < 3) throw new Error('not yet');
 *   return 'ok';
 * }, { attempts: 5, wait: 1 });
 * assert(result, 'ok');
 */
export async function retry(method, { attempts = 3, wait = 0, factor = 1 } = {}) {
	let lastError;
	let currentWait = wait;
	for (let attempt = 0; attempt < attempts; attempt++) {
		try {
			return await method(attempt);
		} catch (error) {
			lastError = error;
			if (attempt < attempts - 1 && currentWait > 0) {
				await delay(currentWait);
				currentWait *= factor;
			}
		}
	}
	throw lastError;
}
/**
 * Wraps a promise with a timeout that rejects when not settled in time.
 *
 * @function withTimeout
 * @category utility
 * @async
 * @type {Function}
 * @param {Promise|Function} target - A promise or a function returning a promise.
 * @param {Number} ms - Timeout in milliseconds.
 * @param {String} [message='Timed out'] - Error message used when the timeout fires.
 * @returns {Promise} - Resolves with the target's value or rejects on timeout.
 *
 * @example
 * import { withTimeout, delay, assert } from '@universalweb/acid';
 * assert(await withTimeout(delay(10, 'fast'), 100), 'fast');
 */
export function withTimeout(target, ms, message = 'Timed out') {
	const targetPromise = typeof target === 'function' ? target() : target;
	return new Promise((resolve, reject) => {
		const id = setTimeout(() => reject(new Error(message)), ms);
		targetPromise.then(
			(value) => { clearTimeout(id); resolve(value); },
			(error) => { clearTimeout(id); reject(error); }
		);
	});
}
