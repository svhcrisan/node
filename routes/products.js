const express = require('express');
const productsRouter = express.Router();
const products = require("../controllers/products");

// show products
productsRouter.get('/products', products.getProducts);
// show products by id
productsRouter.get('/products/:id', products.getProductsID);

productsRouter.post('/products', products.createProduct);

productsRouter.delete('/products/:id', products.deleteProduct);

productsRouter.put('/products/:id', products.updateProduct);

module.exports = productsRouter;

