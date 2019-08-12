const products = require("../data/products.json");
const uuidv4 = require("uuid/v4");
const fs = require('fs');
//const path = require('path');

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
    const product = products.find(function (prod) {
        console.log(prod.product_id === productId)
        return prod.product_id === productId;
    })
    if (product) {
        const oneProduct = res.status(200).json(product);
        return oneProduct;
    }
    return res.status(404).json({ errors: [{ message: "Product not found." }] });
}

const createProduct = (req, res) => {
    //read file 
    console.log(req.body);
    fs.readFile('./data/products.json', (err, data) => {
        if (err) {
            return console.log(err);
        }
        //create new product
        const newProducts = {
            product_id: uuidv4(),
            ...req.body
        };

        let products = JSON.parse(data);
        products = [...products, newProducts];
        res.status(201).json({ newProducts });

        //re-write JSON
        fs.writeFile('./data/products.json', JSON.stringify(products), (err) => { return err });
    });
}

const deleteProduct = (req, res) => {
    const id = req.params.id;
    console.log(id);
    fs.readFile('./data/products.json', "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        let products = JSON.parse(data);
        let newProducts = products.filter(obj => {
            return obj.product_id !== id;
        });

        fs.writeFile('./data/products.json', JSON.stringify(newProducts), (err) => { return err });
        res.status(200).json({ message: `Product with id: ${id} has been deleted.` });
    });
}

const updateProduct = (req, res) => {
    const id = req.params.id;
    fs.readFile('./data/products.json', "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        } // treat error

        let products = JSON.parse(data);
        console.log(products);

        const newProducts = products.map((data) => {
            if (data.product_id === id) {
                data = {
                    ...data,
                    ...req.body
                };
            }
            return data;
        });

        fs.writeFile('./data/products.json', JSON.stringify(newProducts), (err) => { return err });
        res.status(200).json({ newProducts });

    });
}

module.exports = { getProducts, getProductsID, createProduct, deleteProduct, updateProduct }