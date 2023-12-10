import _ from 'lodash';

const genDiff = (obj1, obj2) => {
	const keys1 = _.keys(obj1);
	const keys2 = _.keys(obj2);
	const allKeys = [...keys1, ...keys2];

	const result = {};
	allKeys.forEach(key => {
		if (!_.has(obj1, key) && _.has(obj2, key)) {
			result[key] = 'added';
		} else if (_.has(obj1, key) && !_.has(obj2, key)) {
			result[key] = 'deleted';
		} else if (_.has(obj1, key) && _.has(obj2, key)) {
			if (obj1[key] === obj2[key]) {
				result[key] = 'unchanged';
			} else {
				result[key] = 'changed';
			}
		}
	});

	return result;
};

export default genDiff;
