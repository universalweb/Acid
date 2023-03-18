import { getType } from './getType.js';
import { construct } from '../class/construct.js';
export function cloneType(source, args = []) {
	const sourceType = getType(source);
	if (sourceType === Function) {
		if (sourceType.name === 'function') {
			return function() {};
		}
	}
	return construct(sourceType, args);
}
