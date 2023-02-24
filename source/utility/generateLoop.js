import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
import { isFunction } from '../type/isFunction.js';
import { hasValue } from '../type/hasValue.js';
function forEachWrap(object, callback) {
	return object.forEach(callback);
}
export function generateLoop(arrayLoop, objectLoop) {
	return (source, iteratee, results) => {
		let returned;
		if (!hasValue(source)) {
			return;
		} else if (isArray(source)) {
			returned = arrayLoop;
		} else if (isPlainObject(source) || isFunction(source)) {
			returned = objectLoop;
		} else if (source.forEach) {
			returned = forEachWrap;
		} else {
			returned = objectLoop;
		}
		return returned(source, iteratee, results);
	};
}

