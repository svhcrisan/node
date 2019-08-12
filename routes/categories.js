const express = require('express');
const categoriesRouter = express.Router();
const categories = require("../controllers/categories");

// show categories
categoriesRouter.get('/categories', categories.getCategories);
// show categories by id
categoriesRouter.get('/categories/:id', categories.getCategoriesID);
// show products by categories
for (let i = 0; i < categories.length; i++) {
    router.get(`/categories/${i}/products`, categories.getCategoriesIDProducts);
}

module.exports = categoriesRouter;