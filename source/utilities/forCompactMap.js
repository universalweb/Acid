import { isFunction } from '../types/isFunction.js';
import { cloneType } from '../type/cloneType';
import { hasValue } from '../types/hasValue.js';
export function forCompactMap(source, callback) {
	const cloned = cloneType(source);
	const method = cloned.push || cloned.add;
	if (method && isFunction(method)) {
		const methodBound = method.bind(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			if (hasValue(result)) {
				methodBound(result);
			}
		});
	} else if (isFunction(cloned.set)) {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned.set(key, result);
			}
		});
	} else {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned[key] = result;
			}
		});
	}
	return cloned;
}
