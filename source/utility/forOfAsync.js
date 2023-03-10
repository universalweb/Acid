export async function forOfAsync(source, callback) {
	for await (const [key, value] of source) {
		await callback(value, key, source);
	}
	return source;
}
