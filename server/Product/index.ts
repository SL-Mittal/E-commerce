import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Product Service connected to DB"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
