const express = require('express');
const http = require('http');
const router = express.Router();
const app = express();
const categories = require("./Data/categories.json");
const products = require("./Data/products.json");

// show categories
router.get('/categories', (req, res) => {
    res.status(200).json(categories);
});

// show categories by id
router.get('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    if (categories[categoryId]) {
        const oneCategory = res.status(200).json(categories[categoryId]);
        return oneCategory;
    }
    return res.status(404).json({ errors: [{ message: "Category not found." }] });
});

// show products by categories
for (let i = 0; i < categories.length; i++) {
    router.get(`/categories/${i}/products`, (req, res) => {
        const productsByIndex = products.map((elem, index) => {
            if (elem.product_categories.includes(categories[i].id)) {
                return elem;
            }
        });
        const checkNull = (product) => {
            return product != null;
        }
        res.status(200).json(productsByIndex.filter(checkNull));
    });
}

// show products
router.get('/products', (req, res) => {

    // THE BONUS PART!!!!!!!!!!!!!!!
    const query = req.query;
    console.log(query)
    if (Object.keys(query).length > 0) {
        const checkCategory = (prod) => {
            return (prod.product_categories.includes(Number(query.category)) && prod.manufacturerId == query.manufacturerId);
        }
        return res.status(200).json(products.filter(checkCategory));
    }
    res.status(200).json(products);
});

// show products by id
router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    if (products[productId]) {
        const oneProduct = res.status(200).json(products[productId]);
        return oneProduct;
    }
    return res.status(404).json({ errors: [{ message: "Product not found." }] });
});

app.use('/', router);
//declare port where we want to connect
const port = 5000;
//create server, but it is not necessary
const server = http.createServer(app);
// it is good practice to listen at the end.
// ca be write like app.listen(1000);
server.listen(port);