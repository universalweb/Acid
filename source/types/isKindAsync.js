import { isPromise } from './isPromise.js';
import { isGenerator } from './isGenerator.js';
import { isAsync } from './isAsync.js';
/**
 * Checks if an object is a kind of async object such as async function, promise, or generator.
 *
 * @function isKindAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isKindAsync, assert } from 'Acid';
 * assert(isKindAsync(async() => {}), true);
 */
export function isKindAsync(source) {
	if (source) {
		return isPromise(source) || isAsync(source) || isGenerator(source);
	}
	return false;
}
