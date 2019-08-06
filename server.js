const express = require('express');
const http = require('http');
const router = express.Router();
const app = express();

const categories = require("./Data/categories.json");
const products = require("./Data/products.json");

//console.log(categories)

// show products by categories
for (let i = 0; i < categories.length; i++) {
    router.get(`/categories/${i}/products`, (req, res) => {
        const productsByIndex = products.map((elem, index) => {
            //let productId = elem.product_id;
            //console.log(categories[i].id);
            if (elem.product_categories.includes(categories[i].id)) {
                return elem;
            }
        });
        const checkNull = (product) => {
            return product != null;
        }
        //console.log(products)
        res.status(200).json(productsByIndex.filter(checkNull));
    });
}

// show categories
router.get('/categories', (req, res) => {
    res.status(200).json(categories);
});

// show products
router.get('/products', (req, res) => {
    res.status(200).json(products);
});

// show categories by id
router.get('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    if (categories[categoryId]) {
        const oneCategory = res.status(200).json(categories[categoryId]);
        return oneCategory;
    }
    return res.status(404).json({ errors: "Category not found!" });
});




app.use('/', router);
//declare port where we want to connect
const port = 5000;
//create server, but it is not necessary
const server = http.createServer(app);
// it is good practice to listen at the end.
// ca be write like app.listen(1000);
server.listen(port);