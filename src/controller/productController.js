const { createProduct } = require("../services/productService");

async function addProduct(req, res) {
  try {
    const product = await createProduct({
      productName: req.body.productName,
      descripton: req.body.descripton,
      imagePath: req.file.path, // This is the path of the image uploaded by the user
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock,
    });
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
      error: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
      data: {},
      error: err,
    });
  }
}
module.exports = { addProduct };
