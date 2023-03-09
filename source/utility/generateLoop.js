import { isArray } from '../type/isArray.js';
import { isPlainObject } from '../type/isPlainObject.js';
import { isFunction } from '../type/isFunction.js';
import { hasValue } from '../type/hasValue.js';
import { isAsync } from '../type/isAsync.js';
export function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forOfLoopAsync, forOfLoop) {
	return (source, iteratee, results) => {
		let returned;
		const isIterateeAsync = isAsync(iteratee);
		if (!hasValue(source) || !iteratee) {
			return;
		} else if (isArray(source)) {
			returned = (isIterateeAsync) ? arrayLoopAsync : arrayLoop;
		} else if (source.forEach && forOfLoopAsync && forOfLoop) {
			returned = (isIterateeAsync) ? forOfLoopAsync : forOfLoop;
		} else {
			returned = (isIterateeAsync) ? objectLoopAsync : objectLoop;
		}
		return returned(source, iteratee, results);
	};
}

