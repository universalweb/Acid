import { isAsync } from './isAsync.js';
import { isGenerator } from './isGenerator.js';
import { isPromise } from './isPromise.js';
/**
 * Checks if an object is a kind of async object such as async function, promise, or generator.
 *
 * @function isKindAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isKindAsync, assert } from '@universalweb/acid';
 * assert(isKindAsync(async() => {}), true);
 */
export function isKindAsync(source) {
	if (source) {
		return isPromise(source) || isAsync(source) || isGenerator(source);
	}
	return false;
}
