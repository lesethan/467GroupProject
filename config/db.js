const mysql = require("mysql");

// Connect to the Legacy DB
const connectDB = async () => {
  try {
    const conn = await mysql.createConnection({
      host: "blitz.cs.niu.edu",
      user: "student",
      password: "student",
      database: "csci467",
    });

    conn.connect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
