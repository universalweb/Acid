import { everyArray } from '../index.js';
function everyArgFactory(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}
export function everyArg(method, primarySource, ...otherSources) {
	if (otherSources) {
		return method(primarySource) && everyArray(otherSources, method);
	}
	return method(primarySource);
}
