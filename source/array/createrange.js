const rangeUp = (start, end, incrementArg) => {
	const rangeArray = [];
	let position = start;
	while (position < end) {
		rangeArray.push(position);
		position += incrementArg;
	}
	return rangeArray;
};
const rangeDown = (start, end, incrementArg) => {
	const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
	const rangeArray = [];
	let position = start;
	while (position > end) {
		rangeArray.push(position);
		position -= increment;
	}
	return rangeArray;
};
/**
 * Create a numbered list of integers.
 *
 * @type {Function} range
 * @category array
 * @param {number} start - Value which determines the start of the range.
 * @param {number} end - Value which determines the end of the range.
 * @param {number} step - Value used to step between integers.
 * @returns {Array} - An array of integers.
 * @example
 * range(0, 30, 5);
 * // => [0, 5, 10, 15, 20, 25]
 */
export const range = (start, end, step = 1) => {
	if (start < end) {
		return rangeUp(start, end, step);
	} else {
		return rangeDown(start, end, step);
	}
};

