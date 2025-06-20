import { isType } from './isType.js';
export function isConstructorFactory(source) {
	return (target) => {
		if (target?.constructor) {
			return isType(target, source);
		}
		return false;
	};
}
