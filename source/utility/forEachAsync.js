export async function forEachAsync(source, callback) {
	const values = [];
	const properties = [];
	let valuesLength = 0;
	source.forEach((item, key) => {
		values[valuesLength] = item;
		properties[valuesLength] = item;
		valuesLength++;
	});
	for (let index = 0; index < valuesLength; index++) {
	}
	return source;
}
