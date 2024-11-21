const express = require("express");
const { register, login } = require("../controller/authController"); // Import fungsi handler

const router = express.Router();

// Route untuk registrasi
router.post("/register", register);

// Route untuk login
router.post("/login", login);

module.exports = router;
