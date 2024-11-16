const cloudinary = require("../config/cloudinaryConfig");
const ProdutRepository = require("../repositories/productRepository");
const fs = require("fs/promises");
async function createProduct(productDetails) {
  // We should check if an image is coming to create the product , then we shouild first upload it on cloudinary

  const imagePath = productDetails.imagePath;
  if (imagePath) {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
      var productImage = cloudinaryResponse.secure_url;
      await fs.unlink(imagePath);
    } catch (err) {
      console.log(err);
      throw { reason: "Not able to upload image", statusCode: 500 };
    }
  }
  // Then use the image url to create the product
  const product = await ProdutRepository.createProduct({
    ...productDetails,
    productImage: productImage,
  });

  if (!product) {
    throw { reason: "Not able to create product", statusCode: 500 };
  }
  return product;
}

module.exports = { createProduct };
