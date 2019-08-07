const https = require('https');
const fs = require('fs');
const app = require('./app');
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

