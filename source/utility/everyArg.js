import { everyArray } from '../index.js';
export function everyArg(method, primarySource, ...otherSources) {
	if (otherSources) {
		return method(primarySource) && everyArray(otherSources, method);
	}
	return method(primarySource);
}
