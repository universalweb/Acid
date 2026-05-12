/**
 * Creates a function that iterates predicate/handler pairs and invokes the first handler whose predicate returns truthy.
 * Each pair is `[predicate, handler]`. Predicate and handler each receive the same arguments.
 *
 * @function cond
 * @category function
 * @type {Function}
 * @param {Array<Array<Function>>} pairs - Array of [predicate, handler] pairs.
 * @returns {Function} - The new wrapped function.
 *
 * @example
 * import { cond, assert } from '@universalweb/acid';
 * const fn = cond([
 *   [(n) => n < 0, () => 'neg'],
 *   [(n) => n === 0, () => 'zero'],
 *   [() => true, () => 'pos']
 * ]);
 * assert(fn(-1), 'neg');
 * assert(fn(0), 'zero');
 * assert(fn(2), 'pos');
 */
export function cond(pairs) {
	return function(...args) {
		for (const [predicate, handler] of pairs) {
			if (predicate.apply(this, args)) {
				return handler.apply(this, args);
			}
		}
	};
}
