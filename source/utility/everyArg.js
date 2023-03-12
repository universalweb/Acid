import { everyArray } from '../array/every.js';
export function everyArg(method, primarySource, ...otherSources) {
	if (otherSources) {
		return method(primarySource) && everyArray(otherSources, method);
	}
	return method(primarySource);
}
