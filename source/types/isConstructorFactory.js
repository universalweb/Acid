export function isConstructorFactory(source) {
	if (!source) {
		return () => {
			return false;
		};
	}
	return (target) => {
		return target?.constructor === source || false;
	};
}
