/*
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. 
Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.
*/

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
