export default str => {
	const obj = {
		G: 'C',
		C: 'G',
		T: 'A',
		A: 'U',
	};
	const objArr = Object.entries(obj);
	const strArr = Array.from(str);
	const result = [];
	for (const item of strArr) {
		for (const [key, value] of objArr) {
			if (item === key) {
				result.push(value);
			}
		}
	}
	if (strArr.length !== result.length) {
		return null;
	}
	return result.join('');
};
