/*
ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
G -> C
C -> G
T -> A
A -> U

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК 
и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), 
то функция должна вернуть пустую строку. 
Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), 
то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
*/

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
