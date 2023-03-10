import { everyArray } from '../index.js';
export function isTypeFactory(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}
