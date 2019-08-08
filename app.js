const express = require('express');
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");
const cors = require("cors");
const app = express();
const whitelist = ["http://localhost:3000"];

const corsOption = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("CORS is on the way, my friend!"));
        }
    }
}

app.use(cors(corsOption));
app.use('/', categoriesRouter);
app.use('/', productsRouter);

module.exports = app;