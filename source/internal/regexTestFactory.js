import { hasValue } from '../type/hasValue.js';
export function regexTestFactory(regexType) {
	return (item) => {
		return (hasValue(item)) ? regexType.test(item) : false;
	};
}
