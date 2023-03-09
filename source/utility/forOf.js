export function forOf(source, callback) {
	for (const [key, value] of source) {
		callback(value, key, source);
	}
	return source;
}
