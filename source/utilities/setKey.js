import { isFunction } from '../types/isFunction.js';
import { isArray } from '../types/isArray.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isNumber } from '../types/isNumber.js';
export function setKey(source, key, value) {
	if (key && isPlainObject(source)) {
		source[key] = value;
	} else if (isNumber(key) && isArray(source)) {
		source[key] = value;
	} else if (source.set) {
		source.set(key, value);
	} else if (source.push) {
		source.push(value);
	} else if (source.add) {
		source.add(value);
	} else {
		source[key] = value;
	}
	return source;
}