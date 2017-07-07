import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
import { hasValue } from '../internal/is';
/**
  * Extracts all key values from an object.
  *
  * @function compactKeys
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @returns {Array} - Returns an array of key values.
  *
  * @example
  * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'});
  * //=> [Lucy, John, Thor]
  *
*/
export const compactKeys = (object) => {
  const keys = [];
  eachObject(object, (item, key) => {
    if (hasValue(item)) {
      keys.push(key);
    }
  });
  return keys;
};
assign(acid, {
  compactKeys
});
