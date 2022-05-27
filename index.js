//  const emitter = require("./file");

//  const logger = new emitter();
//  logger.on('message', (data) => console.log(`DONE`, data));
//  logger.log('Mahad');
//  logger.log('Mahad');
const http = require('http');
const path = require('path');
const fs = require('fs');
const ns = http.createServer((req, res) => {
    if (req.url === '/mahad') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.end(content);
        })
    }
    if (req.url === '/api/users') {
        const users = [
            { name: 'Mahad', age: '21' },
            { name: 'Ans', age: '20' }
        ];
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(users));
    }


})

const Port = process.env.Port || 2000;
ns.listen(Port, () => console.log(`Server connected to port: ${Port}`));