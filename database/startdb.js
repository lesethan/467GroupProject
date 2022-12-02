const sqlite3 = require('sqlite3').verbose();
const { get } = require('http');
const path = require('path');
const dbPath = path.resolve(__dirname, 'startdb.db');

// Connect to DB
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
});

module.exports = {
getAllRows: async (result) => {
  db.all(`SELECT * FROM feeBracket`, [], (err,rows) => {
    if (err) return console.error(err.message);
    console.log(rows);
    result(rows);
  });
},
};
          

// // Test Query
// sql = `SELECT * FROM "parts" ORDER BY number`;
// db.all(sql, [], (err, rows) => {
//     if (err) return console.error(err);
//     rows.forEach((row) => console.log(row))
// })

// sql = `CREATE TABLE "cart" (cart_id INTEGER PRIMARY KEY, session_id)`;
// db.run(sql);

// sql = `CREATE TABLE "cartitems" (ci_id INTEGER PRIMARY KEY, number, quantity_selected, session_id)`
// db.run(sql);

// sql = `DROP TABLE cart`
// db.run(sql)

// sql = `SELECT * FROM cartitems INNER JOIN parts ON parts.number = cartitems.number WHERE cartitems.session_id = ?`
// db.each(sql, ["iXIAvP6nrIr33KGBfTyWhkleK-OSSUFh"], (err, rows) => {
//     if (err) console.error(err);
//     console.log(rows)
// });

// sql = `SELECT * FROM cartitems`;
// db.all(sql, [], (err, rows) => {
//     if (err) return console.error(err);
//     rows.forEach((row) => console.log(row))
// })

// sql = `CREATE TABLE users (uid INTEGER AUTO INCREMENT, username, password)`
// db.run(sql)

// sql = `INSERT INTO users (username, password) VALUES (?, ?)`
// db.run(sql, ["admin", "admin"])
