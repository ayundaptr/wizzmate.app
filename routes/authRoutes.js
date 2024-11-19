// routes/authRoutes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  verifyToken,
} = require("../controller/authController"); // Mengimpor controller

const router = express.Router();

// Endpoint untuk registrasi pengguna baru
router.post("/register", registerUser);

// Endpoint untuk login pengguna
router.post("/login", loginUser);

// Endpoint untuk memverifikasi token
router.post("/verify-token", verifyToken);

module.exports = router;
