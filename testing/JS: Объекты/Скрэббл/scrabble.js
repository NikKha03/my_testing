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
