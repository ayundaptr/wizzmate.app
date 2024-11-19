// controller/authController.js
// controller/authController.js
const {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("../firebase-config"); // Mengimpor Firebase dengan cara modular

// Fungsi untuk registrasi pengguna
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password diperlukan" });
  }

  try {
    // Mendaftar pengguna baru
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    res
      .status(201)
      .json({ message: "User berhasil terdaftar", user: userCredential.user });
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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    res.status(200).json({
      message: "Login berhasil",
      token: await user.getIdToken(), // Ambil ID token untuk autentikasi
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ message: "Login gagal", error: error.message });
  }
};

module.exports = { registerUser, loginUser };
