import { isPlainObject } from '../internal/is';
import { keys } from '../internal/object';
/**
  * Check if a value is falsey which are false, null, 0, "", undefined, and NaN.
  *
  * @function falsey
  * @category Utility
  * @type {Function}
  * @param {*} source - Item to be falsey checked.
  * @param {*} returnIfTrue - Item to be returned if item is falsey.
  * @returns {boolean|*} - Returns true if the item is falsey or returnIfTrue if provided otherwise returns false.
  *
  * @example
  * falsey(0);
  * // => true
  * @example
  * falsey(1);
  * // => false
*/
export function falsey(source, returnIfTrue = true) {
	return Boolean(source) === false && returnIfTrue;
}
/**
  * Check if a value is truey which is anything but false, null, 0, "", undefined, and NaN.
  *
  * @function truey
  * @category Utility
  * @type {Function}
  * @param {*} source - Item to be truey checked.
  * @param {*} returnIfTrue - Item to be returned if item is truey.
  * @returns {boolean|*} - Returns true if the item is truey or returnIfTrue if provided otherwise returns false.
  *
  * @example
  * truey(0);
  * // => false
  * @example
  * truey(1);
  * // => true
*/
export function truey(source, returnIfTrue = true) {
	return Boolean(source) && returnIfTrue;
}
/**
  * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  *
  * @function compact
  * @category Utility
  * @type {Function}
  * @param {Array|Object} source - Array or Object to be compacted.
  * @returns {Array|Object} - A new object or array containing the filtered values.
  *
  * @example
  * compact([1,'B', 'Cat', false, null, 0 , '', undefined, NaN]);
  * // => [1, 'B', 'Cat']
*/
export function compact(source) {
	if (isPlainObject(source)) {
		const sourceKeys = keys(source);
		const sourceKeysLength = sourceKeys.length;
		const targetObject = {};
		for (let i = 0; i < sourceKeysLength; i++) {
			const keyName = sourceKeys[i];
			const item = source[keyName];
			const isTruey = truey(item);
			if (isTruey) {
				targetObject[keyName] = item;
			}
		}
		return targetObject;
	}
	return source.filter((item) => {
		return truey(item);
	});
}

