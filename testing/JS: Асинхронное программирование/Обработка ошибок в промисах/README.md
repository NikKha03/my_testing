# file.js

Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует. Если файл существует, то функция должна успешно завершиться.

```sh
import { touch } from './file.js';

touch('/myfile').then(() => console.log('created!'));

// Повторный вызов успешно завершается
touch('/myfile').then(() => console.log('created!'));
```
