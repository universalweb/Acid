import { everyArray } from '../arrays/every.js';
export function isTypeFactory(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources?.length) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}
