const express = require('express');
const productsRouter = express.Router();
const products = require("../controllers/products");

// show products
productsRouter.get('/products', products.getProducts);
// show products by id
productsRouter.get('/products/:id', products.getProductsID);

module.exports = productsRouter;