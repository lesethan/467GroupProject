const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'innerdb.db') // Need to resolve path to inner DB otherwise server can't open it

// Connect to DB
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
});

module.exports = {
    getAllItems: async (result) => {
        await db.all("SELECT * FROM parts ORDER BY number", [], (err, rows) => {
            if (err) return console.error(err.message);
            result(rows);
        })
      },
}