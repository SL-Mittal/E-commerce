const express = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/userController.js");
const { authenticate } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getProfile);

module.exports = router;
