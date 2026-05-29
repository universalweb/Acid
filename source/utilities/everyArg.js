import { every } from './every.js';
import { isAsync } from '../types/isAsync.js';
/**
 * Returns a function that, given a set of arguments, returns true only when every supplied method evaluates truthy against every argument. The returned function is async when any of the methods is async.
 *
 * @function everyArg
 * @category utility
 * @type {Function}
 * @param {...Function} methods - Predicates each argument must satisfy.
 * @returns {Function} - The combined predicate.
 *
 * @example
 * import { everyArg, isNumber, assert } from '@universalweb/acid';
 * const allNumbers = everyArg(isNumber);
 * assert(allNumbers(1, 2, 3), true);
 * assert(allNumbers(1, 'a'), false);
 */
export function everyArg(...methods) {
	if (isAsync(methods[0])) {
		return async function(...args) {
			return every(methods, async (method) => {
				return every(args, async (item) => {
					return method(item);
				});
			});
		};
	}
	return function(...args) {
		return every(methods, (method) => {
			return every(args, (item) => {
				return method(item);
			});
		});
	};
}
