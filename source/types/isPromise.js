/**
 * Checks if an object is a promise.
 *
 * @function isPromise
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isPromise, assert } from '@universalweb/acid';
 * assert(isPromise(new Promise(() => {})), true)
 */
export function isPromise(source) {
	if (source) {
		return source instanceof Promise;
	}
	return false;
}
