const sqlite3 = require('sqlite3').verbose();
const legacyparts = require('./legacydb');
let sql;

// Connect to DB
const db = new sqlite3.Database('./innerdb.db', sqlite3.OPEN_READWRITE, (err) => {
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
sql = `SELECT * FROM "parts" ORDER BY number`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err);
    rows.forEach((row) => console.log(row))
})

db.close();