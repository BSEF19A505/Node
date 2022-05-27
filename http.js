const http = require('http');
http.createServer((req, res) => {
        res.write('Hello WOrld');
        res.end();
    }

).listen(2000, () => console.log('Connected'))