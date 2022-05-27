const fs = require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname, 'test', 'test1.txt'), 'Hello World! ', err => {
    if (err) throw err;
    console.log('File Created');
})
fs.appendFile(path.join(__dirname, 'test', 'test1.txt'), 'My Name is Mahad', err => {
    if (err) throw err;
    console.log('File Created');
})
fs.readFile(path.join(__dirname, '/test', 'test1.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})