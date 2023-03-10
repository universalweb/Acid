import { everyArray } from '../index.js';
function everyValue(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}
function everyArg(method, primarySource, ...otherSources) {
	if (otherSources) {
		return method(primarySource) && everyArray(otherSources, method);
	}
	return method(primarySource);
}
