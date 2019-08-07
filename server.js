const express = require('express');
const https = require('https');
const fs = require('fs');
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");
const app = express();

app.use('/', categoriesRouter);
app.use('/', productsRouter);

//declare port where we want to connect
const port = 5000;
//create server, but it is not necessary
const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);

//const server = http.createServer(app);
// it is good practice to listen at the end.
// ca be write like app.listen(1000);
server.listen(port);