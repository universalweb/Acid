import { isArray } from '../types/isArray.js';
import { toPath } from './toPath.js';
/**
 * Travels down an object based on a path string and sets a value on the last segment.
 * Auto-creates missing intermediate objects (or arrays when the next segment is a numeric index).
 *
 * @function set
 * @category utility
 * @type {Function}
 * @param {Object} target - Object to traverse and set a value on.
 * @param {String|Array} propertyString - Dot/bracket path or pre-tokenized array of keys.
 * @param {*} value - Value to assign at the end of the path.
 * @returns {Object} - Returns the original target.
 *
 * @example
 * import { set, assert } from '@universalweb/acid';
 * const objectTarget = { post: { like: ['a', 'b', 'c'] } };
 * set(objectTarget, 'post.like[2]', 'g');
 * assert(objectTarget.post.like[2], 'g');
 */
export function set(target, propertyString, value) {
	if (!target) {
		return target;
	}
	const pathArray = isArray(propertyString) ? propertyString : toPath(propertyString);
	const lastIndex = pathArray.length - 1;
	let link = target;
	for (let index = 0; index < lastIndex; index++) {
		const key = pathArray[index];
		if (link[key] === undefined || link[key] === null) {
			const nextKey = pathArray[index + 1];
			link[key] = /^\d+$/.test(nextKey) ? [] : {};
		}
		link = link[key];
	}
	link[pathArray[lastIndex]] = value;
	return target;
}
