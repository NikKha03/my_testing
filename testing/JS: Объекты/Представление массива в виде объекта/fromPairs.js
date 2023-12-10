export default arrays => {
	const result = {};
	for (const arr of arrays) {
		const [key] = arr;
		const [, value] = arr;
		result[key] = value;
	}
	return result;
};
