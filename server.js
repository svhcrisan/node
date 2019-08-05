const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile("./Data/products.json", (err, data) => { res.end(data.toString()) });
    console.log(res);

    if (req.url === "/categories") {
        fs.readFile("./Data/categories.json", (err, data) => { res.end(data.toString()) });
    }






})
    .listen(5000, "127.0.0.1");










