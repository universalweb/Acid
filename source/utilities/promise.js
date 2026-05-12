/**
 * A wrapper around the promise constructor.
 *
 * @function promise
 * @type {Function}
 * @category utility
 * @param {Function} callback - Function to be called back.
 * @returns {Promise} - A constructor with a callback function.).
 *
 * @example
 * import { promise, assert } from '@universalweb/acid';
 * assert(await promise((resolve) => resolve(42)), 42);
 */
export function promise(callback) {
	return new Promise(callback);
}

