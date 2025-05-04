import fsp from 'fs/promises';

export const exchange = async (filepath1, filepath2) => {
	// Читаем оба файла
	const reading1 = fsp.readFile(filepath1);
	const reading2 = fsp.readFile(filepath2);
	// Делаем массив из двух промисов, превращаем его в один промис
	const [data1, data2] = await Promise.all([reading1, reading2]);
	// Меняем содержимое файлов (мутируем их)
	const writing1 = fsp.writeFile(filepath1, data2);
	const writing2 = fsp.writeFile(filepath2, data1);
	await Promise.all([writing1, writing2]);
	// Выполняем эти операции параллельно. Но можно
	// сделать это и последовательно:
	// await fsp.writeFile(filepath1, data2);
	// await fsp.writeFile(filepath2, data1);
};

exchange('./file1', './file2');
