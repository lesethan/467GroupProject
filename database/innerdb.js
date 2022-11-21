const sqlite3 = require('sqlite3').verbose();
const { resolve } = require('path');
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
    cartExists: function (sessionID)  {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get('SELECT * FROM cart WHERE session_id = ?', [sessionID], (err, rows) => {
                    if (err) reject (err);
                    resolve(rows);
                })
            })
        })    
    },
    createCart: function (sessionID) {
        db.all("INSERT INTO cart (session_id) VALUES (?)", [sessionID], (err, rows) => {
            if (err) return console.error(err.message);
            console.log("Cart created");
        })
    },
    addToCart: function (sessionID, partNumber, quantity) {
        let parsedNum = parseInt(partNumber);
        let parsedQuan = parseInt(quantity);
        db.all("INSERT INTO cartitems (number, quantity_selected, session_id) VALUES (?, ?, ?)", [parsedNum, parsedQuan, sessionID], (err, rows) => {
            if (err) return console.error(err.message);
            console.log("Item added to cart");
        })
    },
    removeFromCart: function (sessionID, partNumber) {
        let parsedNum = parseInt(partNumber);
        db.all("DELETE FROM cartitems WHERE number = ? AND session_id = ?", [parsedNum, sessionID], (err, rows) => {
            if (err) return console.errror(err);
            console.log("Item removed from cart");
        }); 
    },
    getCart: function (sessionID) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT * FROM cartitems INNER JOIN parts ON parts.number = cartitems.number WHERE cartitems.session_id = ?', [sessionID], (err, rows) => {
                    if (err) reject (err);
                    resolve(rows);
                })
            })
        }) 
    }
}
