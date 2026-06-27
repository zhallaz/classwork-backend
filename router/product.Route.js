const express = require("express");
const { createProduct, getAllProducts } = require("../controller/product.js");
const router = express.Router();

router.post("/", createProduct);
router.get("/get", getAllProducts);

module.exports = router;
