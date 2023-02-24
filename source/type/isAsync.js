import { isPromise } from './isPromise.js';
/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from './Acid.js';
 * assert(isAsync(async() => {}), true);
*/
export function isAsync(value) {
	if (value) {
		return value.constructor?.name === 'AsyncFunction';
	}
	return false;
}
/**
 * Checks if an object is an async function or promise.
 *
 * @function isKindAsync
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isKindAsync, assert } from './Acid.js';
 * assert(isKindAsync(async() => {}), true);
*/
export function isKindAsync(value) {
	if (value) {
		return isPromise(value) || isAsync(value);
	}
	return false;
}
