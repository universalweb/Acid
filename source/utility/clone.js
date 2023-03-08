import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
/**
 * Creates a structured clone of an object.
 *
 * @function clone
 * @category utility
 * @type {Function}
 * @param {Object} source - Source object to clone.
 * @returns {Object} - Returns a deep clone of an object.
 *
 * @example
 * import { clone, assert } from './Acid.js';
 * assert(clone({a:{b:[2]}}), {a:{b:[2]}});
 */
const structuredCloneSafe = globalThis.structuredClone;
export function clone(item) {
	return structuredCloneSafe(item);
}

