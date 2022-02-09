import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isEqual } from './isEqual';
/**
  * Performs a toggle between 2 values using a deep or strict comparison.
  *
  * @function toggle
  * @type {Function}
  * @category utility
  * @param  {(string|number|Object|Array)} value - Strictly compared against the on argument.
  * @param {(string|number|Object|Array)} on -  Strictly compared against the value argument.
  * @param {(string|number|Object|Array)} off -  Value to be returned.
  * @returns {(string|number|Object|Array)} - The opposing value to the current.
  *
  * @example
  * let toggleMe = true;
  * toggleMe = toggle(toggleMe, true, false);
  * // => false
*/
export const toggle = (value, on = true, off = false) => {
	return (isEqual(on, value)) ? off : on;
};
assign(acid, {
	toggle
});
