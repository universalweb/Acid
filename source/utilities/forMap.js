import { cloneType } from '../types/cloneType.js';
import { isFunction } from '../types/isFunction.js';
import { isSet } from '../types/isSet.js';
export function forMap(source, callback) {
	const cloned = cloneType(source);
	if (isFunction(cloned.push) || isFunction(cloned.add)) {
		const isSetCloned = isSet(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			if (isSetCloned) {
				cloned.add(result);
			} else {
				cloned.push(result);
			}
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
