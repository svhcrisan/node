const http = require('http');
const fs = require('fs');

// declare paths
const categoriesPath = /(^[\/]categories([\/]?)([a-z0-9])?$)/;
const productsPath = /(^[\/]products[\/]?$)/;
const idPath = /^[0-9]*$/;

http.createServer((req, res) => {
    const url = req.url;

    console.log(url);


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (productsPath.test(url)) {
        fs.readFile("./Data/products.json", (err, data) => {
            try {


                /*
                for (const i = 0; i < objArr.length; i++) {
                    if (idPath.test(url)) {
                        res.end(objArr[i].toString());
                    }
                }
                */




                //console.log(objArr[0]);
                res.end(data.toString());
            } catch (err) {
                return err;
            }
        });
    }
    if (categoriesPath.test(url)) {
        fs.readFile("./Data/categories.json", (err, data) => {
            try {
                res.end(data.toString())
            } catch (err) {
                return err;
            }
        });

    }


    if (idPath.test(categoriesPath)) {
        console.log("intra");
        /*
                fs.readFile("./Data/products.json", (err, data) => {
        
                    const objArr = JSON.parse(data);
                    const pId = (url.match(idPath) || []).slice(-1);
        
                    //console.log(pId);
                    if (pId) {
                        console.log(product.id);
                        const found = objArr.filter(product = product.id === pId);
                        res.end(found);
                        return;
                    }
                }
                */
    }

})
    .listen(5000, "127.0.0.1");










