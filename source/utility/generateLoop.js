import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
import { isFunction } from '../type/isFunction.js';
import { hasValue } from '../type/hasValue.js';
import { isAsync } from '../type/isAsync.js';
import { isGenerator } from '../type/isGenerator.js';
export function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forOfLoop, forOfLoopAsync) {
	return (source, iteratee, results) => {
		let returned;
		const isIterateeAsync = isAsync(iteratee);
		if (!hasValue(source) || !iteratee) {
			return;
		} else if (isArray(source)) {
			returned = (isIterateeAsync) ? arrayLoopAsync : arrayLoop;
		} else if (isPlainObject(source) || isFunction(source)) {
			returned = (isIterateeAsync) ? objectLoopAsync : objectLoop;
		} else if (forOfLoop) {
			returned = (isIterateeAsync) ? forOfLoopAsync : forOfLoop;
		} else if (isGenerator(source)) {
			returned = forOfLoopAsync;
		} else {
			returned = (isIterateeAsync) ? objectLoopAsync : objectLoop;
		}
		return returned(source, iteratee, results);
	};
}

