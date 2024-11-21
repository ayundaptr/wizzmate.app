const { auth } = require("../firebase-config");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

// Fungsi registrasi pengguna
exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password diperlukan" });
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    res.status(201).json({
      message: "User berhasil didaftarkan",
      user: userCredential.user.uid,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mendaftarkan pengguna", error: error.message });
  }
};

// Fungsi login pengguna
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password diperlukan" });
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    res
      .status(200)
      .json({ message: "Login berhasil", user: userCredential.user.uid });
  } catch (error) {
    res.status(500).json({ message: "Gagal login", error: error.message });
  }
};
