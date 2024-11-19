// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const mlRoutes = require("./routes/mlRoutes");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Untuk mem-parsing JSON dari request

// Gunakan route autentikasi
app.use("/api/auth", authRoutes);

app.use("/api/ml", mlRoutes);

const PORT = process.env.PORT || 3000;

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
