/**
 * Creates a structured clone of an object which is a "structured-cloneable type".
 *
 * @function clone
 * @category utility
 * @type {Function}
 * @param {Object} source - Any structured-cloneable type object.
 * @returns {Object} - Returns a deep clone of an object.
 *
 * @example
 * import { clone, assert } from 'Acid';
 * assert(clone({a:{b:[2]}}), {a:{b:[2]}});
 */
const structuredCloneSafe = globalThis.structuredClone;
export function clone(source) {
	return structuredCloneSafe(source);
}

