import { isType } from './isType.js';
export function isConstructorFactory(source) {
	return (target) => {
		if (target?.constructor) {
			if (source) {
				return isType(target, source);
			}
		}
		return false;
	};
}
