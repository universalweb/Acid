import { hasValue } from '../types/hasValue.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { keys } from './keys.js';
import { pluckObject } from './pluckObject';
/**
 * Returns the amount of keys on an object or if the length or size property of an object is present it will return it else it will default to returning the amount of keys on an object.
 *
 * @function objectSize
 * @category object
 * @param {Object} source - The source object.
 * @returns {Number|undefined} - The amount of keys.
 *
 * @example
 * import { objectSize, assert } from '@universalweb/acid';
 * assert(objectSize({ 0: 'a', 1: 'b', 2: 'c' }), 3);
 */
export function objectSize(source) {
	if (!source) {
		return;
	}
	if (isPlainObject(source)) {
		return keys(source).length;
	}
	const objectLengthProperty = source.length;
	if (hasValue(objectLengthProperty)) {
		return objectLengthProperty;
	}
	const objectSizeProperty = source.size;
	if (hasValue(objectLengthProperty)) {
		return objectSizeProperty;
	}
	return keys(source).length;
}
