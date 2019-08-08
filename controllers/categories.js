const categories = require("../data/categories.json");

function getCategories(req, res) {
    res.status(200).json({ data: categories });
}

function getCategoriesID(req, res) {
    const categoryId = req.params.id;
    if (categories[categoryId]) {
        const oneCategory = res.status(200).json(categories[categoryId]);
        return oneCategory;
    }
    return res.status(404).json({ errors: [{ message: "Category not found." }] });
}

function getCategoriesIDProducts(req, res) {
    const productsByIndex = products.map((elem, index) => {
        if (elem.product_categories.includes(categories[i].id)) {
            return elem;
        }
    });
    const checkNull = (product) => {
        return product != null;
    }
    res.status(200).json(productsByIndex.filter(checkNull));
}

module.exports = { getCategories, getCategoriesID, getCategoriesIDProducts }