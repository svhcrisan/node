const products = require("../data/products.json");
const uuid = require("uuid");
const fs = require('fs');
var path = require('path');

function getProducts(req, res) {
    // THE BONUS PART!!!!!!!!!!!!!!!
    const query = req.query;
    console.log(query);
    if (Object.keys(query).length > 0) {
        const checkCategory = (prod) => {
            return (prod.product_categories.includes(Number(query.category)) && prod.manufacturerId == query.manufacturerId);
        }
        return res.status(200).json(products.filter(checkCategory));
    }
    res.status(200).json(products);
}

function getProductsID(req, res) {

    const productId = req.params.id;
    console.log(productId);
    const product = products.find(function (prod) {
        console.log(prod.product_id === productId)
        return prod.product_id === productId;
    })

    console.log('aaa', product)
    if (product) {
        const oneProduct = res.status(200).json(product);
        return oneProduct;
    }
    return res.status(404).json({ errors: [{ message: "Product not found." }] });
}

const createProduct = (req, res) => {
    const product = req.body;

    //read file 
    fs.readFile(path.resolve(__dirname, './products.json'), () => {
        return console.log(data);
    });


    //parse json => [{} {} {}]

    //user.id = uuid

    // push products

    products.push(product)

    res.status(201).json({ data: products });
}



module.exports = { getProducts, getProductsID, createProduct }