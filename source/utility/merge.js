import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
import { each } from './each.js';
/**
 * Recursively deep assign a target object with a source object. The source objects values are assigned onto the target object's matching properties.
 *
 * @function merge
 * @category utility
 * @type {Function}
 * @param {Object} target - The object which will be modified.
 * @param {Object} source - Source object to merge into the target object.
 * @returns {Object} - Returns target.
 *
 * @example
 * import { merge, assert } from 'Acid';
 * assert(merge([1,2,4],[3]), [3, 2, 4]);
 */
const structuredCloneSafe = globalThis.structuredClone;
export function merge(target, ...sources) {
	each(sources, (currentSource) => {
		each(currentSource, (sourceItem, sourceKey) => {
			if (target[sourceKey]) {
				if (isPlainObject(sourceItem) || isArray(sourceItem) || sourceItem.forEach) {
					return merge(target[sourceKey], sourceItem);
				}
			}
			target[sourceKey] = sourceItem;
		});
	});
	return target;
}

