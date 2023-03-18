import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Int16Array.
 *
 * @function isGenerator
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isGenerator } from 'Acid';
 * isGenerator(function* (){});
 * // => true
 */
export const isGeneratorCall = isConstructorNameFactory('GeneratorFunction');
export const isGenerator = isTypeFactory(isGeneratorCall);
