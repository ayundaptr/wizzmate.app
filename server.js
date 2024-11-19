// server.js
// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); // Mengimpor routes

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Gunakan PORT dari .env atau 5000 default

// Middleware
app.use(bodyParser.json());

// Gunakan routes autentikasi
app.use("/api/auth", authRoutes);

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
