import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
let count = 0;
const uidFree = [];
const uidClosed = {};
/**
  * Creates a numerical unique ID and recycles old ones. UID numerically ascends however freed UIDs are later reused.
  *
  * @function uid
  * @category utility
  * @type {Function}
  * @category utility
  * @returns {number} - Returns a unique id.
  *
  * @test
  * (async () => {
  *   return await assert(uid(), 0) && await assert(uid(), 1);
  * });
  *
  * @example
  * uid();
  * // => 0
  * uid();
  * // => 1
*/
export function uid() {
  let result = uidFree.shift(uidFree);
  if (!hasValue(result)) {
    result = count;
    uidClosed[result] = true;
    count++;
  }
  return result;
};
/**
  * Frees an UID so that it may be recycled for later use.
  *
  * @function uid.free
  * @category utility
  * @type {Function}
  * @param {number} id - Number to be freed.
  * @returns {undefined} - Nothing is returned.
  *
  * @test
  * (async () => {
  *   return await assert(uid(), 0) &&
  *    await assert(uid(), 1) &&
  *    await assert(uid.free(0), undefined) &&
  *    await assert(uid(), 0);
  * });
  *
  * @example
  * uid();
  * // => 0
  * uid();
  * // => 1
  * uid.free(0);
  * // => undefined
  * uid();
  * // => 0
*/
uid.free = (id) => {
  uidClosed[id] = null;
  uidFree.push(id);
};
assign(acid, {
  uid,
});
