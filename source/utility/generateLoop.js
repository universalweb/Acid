import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
import { isFunction } from '../type/isFunction.js';
import { hasValue } from '../type/hasValue.js';
import { isAsync } from '../type/isAsync.js';
export function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forEach, forEachAsync, forOfLoopAsync, forOfLoop) {
	return (source, iteratee, results) => {
		let returned;
		const isIterateeAsync = isAsync(iteratee);
		if (!hasValue(source) || !iteratee) {
			return;
		} else if (isArray(source)) {
			returned = (isIterateeAsync) ? arrayLoopAsync : arrayLoop;
		} else if (isPlainObject(source)) {
			returned = (isIterateeAsync) ? objectLoopAsync : objectLoop;
		} else if (forEachAsync && source.forEach) {
			returned = (isIterateeAsync) ? forEachAsync : forEach;
		} else if (forOfLoop) {
			returned = (isIterateeAsync) ? forOfLoopAsync : forOfLoop;
		}
		return returned(source, iteratee, results);
	};
}

