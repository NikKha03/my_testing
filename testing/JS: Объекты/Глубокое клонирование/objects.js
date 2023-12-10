import isObject from 'lodash/isObject.js';

const cloneDeep = obj => {
	const result = {};
	const arr = Object.entries(obj);
	arr.map(([key, value]) => {
		result[key] = isObject(value) ? cloneDeep(value) : value;
		return true;
	});

	return result;
};

export default cloneDeep;
