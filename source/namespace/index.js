let cacheSuper;
/**
 * Acid Object accessible through $ default method is model.
 *
 * @function $
 * @category main
 * @returns {*} - The return value of the superMethod. The default superMethod is model.
 *
 * @example
 * $('modelName', {example: 1});
 * // => {example: 1}
 */
const $ = (...args) => {
  return cacheSuper(...args);
};
/**
 * Re-assigns the main method for $.
 *
 * @function superMethod
 * @category main
 * @memberof $
 * @param {Function} callable - The function that will become the main object's subroutine.
 * @returns {undefined} - Returns nothing.
 *
 * @test
 * (async () => {
 *  superMethod($.get);
 *  return assert($('flow', $), $.flow);
 * });
 *
 * @example
 * superMethod($.get);
 * $('flow', $);
 * // => $.flow
 */
const superMethod = (callable) => {
  cacheSuper = callable;
};
$.superMethod = superMethod;
export default $;
