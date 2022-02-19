import namespace from '../namespace/index';
import { assign } from '../internal/object';
import { isEqual } from './isEqual';
/**
  * Performs a toggle between 2 values using a deep or strict comparison.
  *
  * @function toggle
  * @type {Function}
  * @category utility
  * @param  {(string|number|Object|Array)} value - Strictly compared against on & off arguments.
  * @param {(string|number|Object|Array)} on -  The first object to be compared to.
  * @param {(string|number|Object|Array)} off - The second object to be compared to.
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
assign(namespace, {
	toggle
});
