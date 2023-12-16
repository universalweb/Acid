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
 * promise((a) => {});
 * // => Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
 */
export function promise(callback) {
	return new Promise(callback);
}

