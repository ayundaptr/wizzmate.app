// controller/authController.js
const { admin, firebase } = require("../firebase-config"); // Mengimpor konfigurasi Firebase

// Fungsi untuk registrasi pengguna
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password diperlukan" });
  }

  try {
    // Mendaftar pengguna baru
    const userRecord = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    res
      .status(201)
      .json({ message: "User berhasil terdaftar", user: userRecord.user });
  } catch (error) {
    console.error("Error creating new user:", error);
    res
      .status(500)
      .json({ message: "Gagal mendaftar pengguna", error: error.message });
  }
};

// Fungsi untuk login pengguna
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password diperlukan" });
  }

  try {
    // Login pengguna
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Dapatkan ID token untuk autentikasi lebih lanjut
    const idToken = await user.getIdToken();

    res.status(200).json({
      message: "Login berhasil",
      token: idToken, // Kirimkan token ID untuk digunakan di client-side
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ message: "Login gagal", error: error.message });
  }
};

// Fungsi untuk memverifikasi token pengguna
const verifyToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token diperlukan" });
  }

  try {
    // Verifikasi ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.status(200).json({ message: "Token valid", decodedToken });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Token tidak valid", error: error.message });
  }
};

module.exports = { registerUser, loginUser, verifyToken };
