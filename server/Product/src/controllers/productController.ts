// src/controllers/productController.ts
import { Request, Response } from "express";
import Product from "../models/Product";
import { verifyUser } from "../services/userService";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token provided" });

  const user = await verifyUser(token);
  if (!user || !user.isAdmin) {
    return res.status(403).json({ message: "Access denied, admin only" });
  }

  const { name, description, price, stock, category } = req.body;
  const product = new Product({ name, description, price, stock, category });
  await product.save();
  res.status(201).json({ message: "Product created", product });
};

export const getProducts = async (
  _req: Request,
  res: Response
): Promise<any> => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<any> => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
