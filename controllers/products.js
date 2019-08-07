const products = require("../data/products.json");

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
    if (products[productId]) {
        const oneProduct = res.status(200).json(products[productId]);
        return oneProduct;
    }
    return res.status(404).json({ errors: [{ message: "Product not found." }] });
}


module.exports = { getProducts, getProductsID }