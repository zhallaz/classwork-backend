const Product = require("../models/product.model.js");
const User = require("../models/user.models.js");
exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, rating, image, quantity, createdBy } = req.body;
    const existingProduct = await Product.findOne({ title });
    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Title already Exist",
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      rating,
      image,
      quantity,
      createdBy,
    });
    res.status(200).json({
      success: true,
      message: "Product Created Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// get all product function
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("createdBy", "userName email country gender")
      .sort({ createdAt: -1 });
    res.status(201).json({
      success: true,
      message: "products Retrived Successful",
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
