const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "wizzmate_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

// Untuk query
connection.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.log("Error executing query:", err);
    return;
  }
  console.log("Results:", results);
});
