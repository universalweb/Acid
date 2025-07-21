import { isSet } from '../types/isSet.js';
export function forOf(source, iteratee) {
	if (isSet(source)) {
		for (const value of source) {
			iteratee(value, source);
		}
		return source;
	}
	for (const [
		key,
		value
	] of source) {
		iteratee(value, key, source);
	}
	return source;
}
