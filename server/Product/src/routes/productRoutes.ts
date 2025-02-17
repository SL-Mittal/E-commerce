import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController";

// const { createProduct } = require("../controllers/productController");
// const getProducts = require("../controllers/productController");
// const getProductById = require("../controllers/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
