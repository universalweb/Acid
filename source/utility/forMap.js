import { isFunction } from '../type/isFunction.js';
import { cloneType } from '../type/cloneType';
import { hasValue } from '../type/hasValue.js';
export function forMap(source, callback) {
	const cloned = cloneType(source);
	const method = cloned.push || cloned.add;
	if (method && isFunction(method)) {
		const methodBound = method.bind(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			methodBound(result);
		});
	} else if (isFunction(cloned.set)) {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			cloned.set(key, result);
		});
	} else {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			cloned[key] = result;
		});
	}
	return cloned;
}
