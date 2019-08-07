const express = require('express');
const productsRouter = require("./routes/products.js");
const categoriesRouter = require("./routes/categories.js");
const app = express();

app.use('/', categoriesRouter);
app.use('/', productsRouter);

module.exports = app;