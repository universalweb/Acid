import { isRelated, construct, assert } from '../../build/module/index.js';
class parentClass{}
class otherClass{}
const child1 = construct(parentClass);
const child2 = construct(parentClass);
const child3 = construct(otherClass);
assert(isRelated(child1, child2), true);
assert(isRelated(child1, parentClass), true);
assert(isRelated(parentClass, child2), true);
assert(isRelated(child1, child3), false);