/**
 * A function which acts like the "new" operator and can pass arguments. This is a safe version of the original which will error if given undefined
 * This is useful when working with classes and prefering to avoid the new operator and it's potential side effects.
 *
 * @function construct
 * @category class
 * @param {Function} target - The target function or class.
 * @param {Array} [argumentsList =[]] - An array-like object specifying the arguments with which target should be called. Default value is a new empty array.
 * @param {Array} newTarget - The constructor whose prototype should be used. See also the new.target operator. If newTarget is not present, its value defaults to target.
 * @returns {*} - A new instance of target (or newTarget, if present), initialized by target as a constructor with the given argumentsList.
 *
 * @example
 * const newClass = construct(function (a) {return a;}, []);
 * // => 2
 */
const reflectConstruct = Reflect.construct;
export function construct(target, argumentsList = [], newTarget) {
	if (newTarget) {
		return reflectConstruct(target, argumentsList, newTarget);
	}
	return reflectConstruct(target, argumentsList);
}
