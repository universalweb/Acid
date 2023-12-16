import { hasValue } from '../types/hasValue.js';
import { isArray } from '../types/isArray.js';
import { isAsync } from '../types/isAsync.js';
import { isFunction } from '../types/isFunction.js';
import { isGenerator } from '../types/isGenerator.js';
import { isPlainObject } from '../types/isPlainObject.js';
export function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forOfLoop, forOfLoopAsync) {
	return (source, iteratee, argument1, argument2, argument3) => {
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
		return returned(source, iteratee, argument1, argument2, argument3);
	};
}

