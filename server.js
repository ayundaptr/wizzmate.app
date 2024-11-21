const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes"); // Import authRoutes

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Gunakan routes
app.use("/api/auth", authRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
