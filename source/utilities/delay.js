/**
 * Returns a promise that resolves with `value` after `ms` milliseconds.
 *
 * @function delay
 * @category utility
 * @type {Function}
 * @async
 * @param {Number} ms - Milliseconds to wait.
 * @param {*} [value] - Optional value to resolve with.
 * @returns {Promise} - Promise that resolves with the given value.
 *
 * @example
 * import { delay } from '@universalweb/acid';
 * await delay(100);
 */
export function delay(ms, value) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(value), ms);
	});
}
/**
 * Resolves on the next animation frame in the browser; falls back to setTimeout(0) in non-browser environments.
 *
 * @function nextFrame
 * @category utility
 * @type {Function}
 * @async
 * @returns {Promise} - Promise resolving when the next frame fires.
 *
 * @example
 * import { nextFrame } from '@universalweb/acid';
 * await nextFrame();
 */
const raf = globalThis.requestAnimationFrame;
export function nextFrame() {
	if (raf) {
		return new Promise((resolve) => raf(resolve));
	}
	return new Promise((resolve) => setTimeout(resolve, 0));
}
