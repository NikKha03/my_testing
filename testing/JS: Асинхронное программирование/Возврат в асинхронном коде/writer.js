import fs from 'fs';

const write = (path, data, cb) => fs.writeFile(path, data, 'utf-8', () => cb());

export default write;

// write('./myfile', 'Асинхронная запись в файл!', () => {
// 	console.log('success');
// });
