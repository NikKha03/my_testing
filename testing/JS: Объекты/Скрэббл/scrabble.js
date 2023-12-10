/*
Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра: 
набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово. 
В результате вызова функция возвращает true или false.

При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.

Примеры:
scrabble('rkqodlw', 'world'); // true
scrabble('avj', 'java'); // false
scrabble('avjafff', 'java'); // true
scrabble('', 'hexlet'); // false
scrabble('scriptingjava', 'JavaScript'); // true
*/

import _ from 'lodash';

const createObj = arr =>
	arr.reduce((acc, i) => {
		if (Object.hasOwn(acc, i)) {
			acc[i] += 1;
		} else {
			acc[i] = 1;
		}
		return acc;
	}, {});

export default (symbols, word) => {
	const symbolsInWordArr = word.toLowerCase().split('');
	const symbolsArr = symbols.toLowerCase().split('');
	const needSymbols = createObj(symbolsInWordArr);
	const haveSymbols = createObj(symbolsArr);

	const needSymbolsArr = _.keys(needSymbols);
	let countTrue = 0;

	needSymbolsArr.forEach(key => {
		if (haveSymbols[key] >= needSymbols[key]) {
			countTrue += 1;
		}
	});

	return countTrue === needSymbolsArr.length;
};
