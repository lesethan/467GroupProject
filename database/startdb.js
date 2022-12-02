const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const legacyparts = require('./legacydb');
const dbPath = path.resolve(__dirname, 'innerdb.db')
let sql;

// Connect to DB
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
});

// Reset all tables
// db.run("DROP TABLE parts");

// Create new parts table now with a quantity field
// sql = `CREATE TABLE "parts" (number, description, price, weight, quantity, pictureURL)`;
// db.run(sql);

// // Insert data into new parts table from the MySQL database
// sql = `INSERT INTO "parts" (number, description, price, weight, quantity, pictureURL) VALUES (?, ?, ?, ?, ?, ?)`
// legacyparts.getAllItems((parts) => { 
//     parts.forEach((part) => {
//         let quantity = Math.floor(Math.random() * (500 - 100) + 100); // Generate random value between 100 and 500 for quantity
//         db.run(sql, [part.number, part.description, part.price, part.weight, quantity, part.pictureURL], (err) => {
//             if (err) return console.error(err.message)
//         })
//     })
// })

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

// sql = `CREATE TABLE orders (oid INTEGER AUTO INCREMENT, session_id, name, email, ccard, subtotal, authorized, shipped, date)`
// db.run(sql)

// sql = `DROP TABLE orders`
// db.run(sql)
// sql = `SELECT * FROM orderitems`
// db.all(sql, [], (err, rows) => {
//         if (err) return console.error(err);
//         console.log(rows)
//         rows.forEach((row) => console.log(row))
//     })

// sql = `CREATE TABLE "orderitems" (order_id INTEGER PRIMARY KEY, number, quantity_selected, session_id)`

// db.run(sql);

// sql = `CREATE TABLE IF NOT EXISTS "feeBracket" (key INTEGER PRIMARY KEY AUTOINCREMENT, lowerBnd INT, upperBnd INT, price REAL)`
// db.run(sql);

sql = `INSERT INTO feeBracket (lowerBnd, upperBnd, price) VALUES (?, ?, ?)`
db.run(sql, [100, 500, 20])