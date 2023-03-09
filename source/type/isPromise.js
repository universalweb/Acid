/**
 * Checks if an object is a promise.
 *
 * @function isPromise
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isPromise } from 'Acid';
 * isPromise(new Promise(() => {}));
 * // => true
 */
export function isPromise(value) {
	if (value) {
		return value instanceof Promise;
	}
	return false;
}
