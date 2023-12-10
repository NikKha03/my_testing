const buildQueryString = parametersObj => {
	const parametersArr = Object.entries(parametersObj);
	return parametersArr
		.sort()
		.reduce((acc, [key, value]) => {
			const newAcc = `${acc}&${key}=${value}`;
			return newAcc;
		}, '')
		.substring(1);
};

export default buildQueryString;
