const express = require('express');
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");
const cors = require("cors");
const app = express();
const whitelist = ["http://localhost:3000"];
const bodyParser = require("body-parser");

const corsOption = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, true);
        }
    }
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors(corsOption));
app.use('/', categoriesRouter);
app.use('/', productsRouter);



module.exports = app;