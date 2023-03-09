export async function forOfAsync(source, callback) {
	for (const [key, value] of source) {
		await callback(value, key, source);
	}
	return source;
}
