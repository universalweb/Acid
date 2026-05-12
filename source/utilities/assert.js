import { isFunction } from '../types/isFunction.js';
import { isKindAsync } from '../types/isKindAsync.js';
import { isPromise } from '../types/isPromise.js';
import { notEqual } from './notEqual.js';
import { stringify } from './json.js';
function createAssertError(source, expected, localOptions) {
	const options = globalThis.options || localOptions;
	let errorTitle;
	if (isFunction(options)) {
		errorTitle = `${options.name} : ${options.constructor.name}`;
	} else if (options) {
		errorTitle = `${options.title || options.method.name} -> ${options.file}`;
	}
	return new Error(
		`Test Failed: ${errorTitle}\n\t\t\tResult: ${stringify(source)}\n\t\t\tExpected: ${stringify(expected)}`,
		options,
	);
}
async function unwrap(value) {
	if (isPromise(value) || isKindAsync(value)) {
		return await value;
	}
	return value;
}
const classPattern = /^class[\s{]/;
function isClassConstructor(target) {
	return typeof target === 'function' && classPattern.test(Function.prototype.toString.call(target));
}
function isPredicate(target) {
	return isFunction(target) && !isClassConstructor(target);
}
/**
 * Async assertion. Awaits both `sourceArg` and `expected` (so either may be a Promise) before comparing.
 * If `expected` is a function (sync or async) it is invoked with the resolved source; a `false` return
 * marks the assertion failed. Returns `true` on success or an Error instance on failure (matching the
 * sync `assert` contract).
 *
 * @function assertAsync
 * @category utility
 * @async
 * @type {Function}
 * @param {*} sourceArg - Value or Promise to compare against.
 * @param {*} expected - Expected value, async/sync predicate, or Promise.
 * @param {*} [options] - Test metadata used in error messages.
 * @returns {Promise<true|Error>} - `true` on pass, Error on fail.
 *
 * @example
 * import { assertAsync } from '@universalweb/acid';
 * await assertAsync(Promise.resolve(2), 2);
 * await assertAsync(Promise.resolve(2), Promise.resolve(2));
 * await assertAsync(Promise.resolve(3), async (value) => value === 3);
 */
export async function assertAsync(sourceArg, expected, options) {
	const source = await unwrap(sourceArg);
	if (source === expected) {
		return true;
	}
	if (isPredicate(expected)) {
		const predicateResult = await expected(source, options);
		if (predicateResult === false) {
			return createAssertError(source, expected, options);
		}
		return true;
	}
	const expectedValue = await unwrap(expected);
	if (notEqual(source, expectedValue)) {
		return createAssertError(source, expectedValue, options);
	}
	return true;
}
/**
 * Check if source value matches the expected value. Routes to {@link assertAsync} when either argument
 * is async (Promise, async function, or thenable).
 *
 * @function assert
 * @category utility
 * @type {Function}
 * @param {*} source - The source value to compare.
 * @param {*} expected - Expected value or predicate.
 * @param {*} [options] - Test metadata used in error messages.
 * @returns {true|Error|Promise<true|Error>} - `true` on pass, Error on fail, or a Promise of the same when async.
 *
 * @example
 * import { assert } from '@universalweb/acid';
 * if (!assert(1, 1)) {
 *   throw new Error('Assert Method Failed');
 * }
 */
export function assert(source, expected, options) {
	if (isKindAsync(source) || isKindAsync(expected) || isPromise(source) || isPromise(expected)) {
		return assertAsync(source, expected, options);
	}
	if (source === expected) {
		return true;
	}
	if (isPredicate(expected)) {
		const predicateResult = expected(source, options);
		if (predicateResult === false) {
			return createAssertError(source, expected, options);
		}
		return true;
	}
	if (notEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
}
