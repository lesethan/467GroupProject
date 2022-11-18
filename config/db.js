const mysql = require("mysql");

// Connect to the Legacy DB
const connection = mysql.createConnection({
  host: "blitz.cs.niu.edu",
  user: "student",
  password: "student",
  database: "csci467",
});

connection.connect();

module.exports = {
  getAllItems: async (result) => {
    await connection.query("SELECT * FROM parts", (err, rows) => {
      result(rows);
    });
  },
};
