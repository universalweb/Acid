import { getType } from './getType.js';
export function isSameType(source, other) {
	const sourceType = getType(source);
	const otherType = getType(other);
	if (sourceType === otherType) {
		if (sourceType.name === otherType.name) {
			return true;
		}
	}
	return false;
}
