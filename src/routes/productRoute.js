const express = require("express");
const { addProduct } = require("../controller/productController");
const uploader = require("../middlewares/multerMiddleware");
const productRoute = express.Router();

productRoute.post("/", uploader.single("productImage"), addProduct);

module.exports = productRoute;
