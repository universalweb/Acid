import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
  * Creates a function that is restricted to execute method once. Repeat calls to the function will return the value of the first call. The method is executed with the this binding of the created function.
  *
  * @function once
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be called.
  * @returns {Function} - Returns the new pass-thru function.
  *
  * @test
  * (async () => {
  *   const onceOnly = once((item) => { return item;});
  *   return await assert(onceOnly(5), 5) && await assert(onceOnly(2), 5);
  * });
  *
  * @example
  * const onceOnly = once((item) => { return item;});
  * onceOnly(5);
  * onceOnly(3);
  * // => 5
*/
export const once = (callable) => {
  let value;
  const onlyOnce = (...args) => {
    if (!hasValue(value)) {
      value = callable(...args);
    }
    return value;
  };
  return onlyOnce;
};
/**
  * Creates a function that executes callable, only after being called n times.
  *
  * @function after
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be called.
  * @param {number} amount - The number of calls until method is invoked.
  * @returns {Function} - Returns the new pass-thru function.
  *
  * @test
  * (async () => {
  *   const onlyAfter = after(2, (item) => { return item;});
  *   return await assert(onlyAfter(1), undefined) && await assert(onlyAfter(2), 2);
  * });
  *
  * @example
  * const onlyAfter = after(1, (item) => { return item;});
  * onlyAfter(1);
  * // => undefined
  * onlyAfter(2);
  * // => 2
*/
const after = (amount, callable) => {
  let point = amount;
  let value;
  const onlyAfter = (...args) => {
    if (point !== null) {
      point--;
    }
    if (point <= 0) {
      value = callable(...args);
      point = null;
    }
    return value;
  };
  return onlyAfter;
};
/**
  * Creates a function that executes callable, only before n times.
  *
  * @function before
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be called.
  * @param {number} amount - The number of calls before n.
  * @returns {Function} - Returns the new pass-thru function.
  *
  * @test
  * (async () => {
  *   const onlyBefore = before(3, (item) => { return item;});
  *   return await assert(onlyBefore(1), 1) && await assert(onlyBefore(2), 2) && await assert(onlyBefore(3), 2);
  * });
  *
  * @example
  * const onlyBefore = before(3, () => { return 1;});
  * onlyBefore(1);
  * // => 1
  * onlyBefore(2);
  * // => 2
  * onlyBefore(3);
  * // => 2
*/
const before = (amount, callable) => {
  let point = amount;
  let value;
  const onlyBefore = (...args) => {
    if (point !== null) {
      point--;
    }
    if (point >= 1) {
      value = callable(...args);
    } else {
      point = null;
    }
    return value;
  };
  return onlyBefore;
};
assign(acid, {
  after,
  before,
  once
});
