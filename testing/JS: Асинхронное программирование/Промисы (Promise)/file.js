import fsp from 'fs/promises';

export const reverse = filePath =>
	fsp
		.readFile(filePath, 'utf-8')
		.then(data1 => data1.split('\n'))
		.then(data2 => data2.reverse().join('\n'))
		.then(data3 => fsp.writeFile(filePath, data3));

// reverse('./file.txt');
