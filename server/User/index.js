const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./src/database/connect");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();
const app = express();
const PORT = 5001;

connection();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
