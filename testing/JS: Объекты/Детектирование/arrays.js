export default (arr, obj) => {
	const entries = Object.entries(obj);
	for (const item of arr) {
		let isRight = true;
		for (const [key, value] of entries) {
			if (!Object.hasOwn(item, key) || item[key] !== value) {
				isRight = false;
			}
		}
		if (isRight) {
			return item;
		}
	}
	return null;
};
