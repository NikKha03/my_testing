import fs from 'fs';

const print = filePath => {
	const callback = (_err, data) => console.log(data);
	fs.readFile(filePath, 'utf-8', callback);

	return callback;
};

export default print;

// print('./myfile');
