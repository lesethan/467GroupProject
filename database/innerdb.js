const sqlite3 = require('sqlite3').verbose();
const { resolve } = require('path');
const path = require('path');
const dbPath = path.resolve(__dirname, 'innerdb.db') // Need to resolve path to inner DB otherwise server can't open it

// Connect to DB
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
});

module.exports = {
    // Generates rows containing every Part in the database
    getAllItems: async (result) => {
        await db.all("SELECT * FROM parts ORDER BY number", [], (err, rows) => {
            if (err) return console.error(err.message);
            result(rows);
        })
      },
    // Checks if a cart already exists for a user's session
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
    // Creates a users cart using their session ID
    createCart: function (sessionID) {
        db.all("INSERT INTO cart (session_id) VALUES (?)", [sessionID], (err, rows) => {
            if (err) return console.error(err.message);
            console.log("Cart created");
        })
    },
    // Adds a quantity of a specific part to the cart
    addToCart: function (sessionID, partNumber, quantity) {
        let parsedNum = parseInt(partNumber);
        let parsedQuan = parseInt(quantity);
        db.all("INSERT INTO cartitems (number, quantity_selected, session_id) VALUES (?, ?, ?)", [parsedNum, parsedQuan, sessionID], (err, rows) => {
            if (err) return console.error(err.message);
            console.log("Item added to cart");
        })
    },
    // Removes part from cart
    removeFromCart: function (sessionID, partNumber) {
        let parsedNum = parseInt(partNumber);
        db.all("DELETE FROM cartitems WHERE number = ? AND session_id = ?", [parsedNum, sessionID], (err, rows) => {
            if (err) return console.errror(err);
            console.log("Item removed from cart");
        }); 
    },
    // Generates rows with information of every part in the users cart
    getCart: function (sessionID) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT * FROM cartitems INNER JOIN parts ON parts.number = cartitems.number WHERE cartitems.session_id = ?', [sessionID], (err, rows) => {
                    if (err) reject (err);
                    resolve(rows);
                })
            })
        }) 
    },
    // Attempts to log user into admin account
    loginUser: function (username, password) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, rows) => {
                    if (err) reject (err);
                    resolve(rows);
                })
            })
        }) 
    },
    generateOrder: function (sessionID, name, email, ccard, subtotal) {
        db.all(`INSERT INTO orders (session_id, name, email, ccard, subtotal, authorized, shipped) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [sessionID, name, email, ccard, subtotal, "Authorized", "Not Shipped"],
                (err, rows) => {
                    if (err) return console.log(err)
                    console.log("Order Generated")
                })
    },
    showOrder: function (sessionID) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT * FROM orders where session_id = ?', [sessionID], (err, rows) => {
                    if (err) reject (err);
                    resolve(rows);
                })
            })
        })
    },
    showAllOrders: async (result) => {
        await db.all("SELECT * FROM orders WHERE shipped = ?", ["Not Shipped"], (err, rows) => {
            if (err) return console.error(err.message);
            result(rows);
        }) 
    },
    completeOrder: function (sessionID) {
        db.run(`UPDATE orders SET shipped = ? WHERE session_id = ?`, ["Shipped", sessionID], (err, rows) => {
            if (err) return console.error(err.message)
            console.log("Order completed")
        })
    },
    
  addInventory: function (partNumber, quantity, partQuantity) {
    let parsedPN = parseInt(partNumber);
    let parsedQTY = parseInt(quantity);
    let parsedTmp = parseInt(partQuantity);
    parsedQTY = parsedQTY + parsedTmp;
    db.serialize(() => {
      db.get(
        'UPDATE parts SET quantity = ? WHERE number = ?',
        [parsedQTY, parsedPN],
        (err, rows) => {
          if (err) return console.error(err.message);
          console.log(
            'Inventory Added | Part Number #' +
              partNumber +
              ' : In Stock - ' +
              parsedQTY
          );
        }
      );
    });
  },

  removeInventory: function (partNumber, quantity, partQuantity) {
    let parsedPN = parseInt(partNumber);
    let parsedQTY = parseInt(quantity);
    let parsedTmp = parseInt(partQuantity);
    if (parsedQTY < parsedTmp) {
      parsedQTY = parsedTmp - parsedQTY;
      db.serialize(() => {
        db.get(
          'UPDATE parts SET quantity = ? WHERE number = ?',
          [parsedQTY, parsedPN],
          (err, rows) => {
            if (err) return console.error(err.message);
            console.log(
              'Inventory Removed | Part Number #' +
                partNumber +
                ' : In Stock - ' +
                parsedQTY
            );
          }
        );
      });
    }
  },

  updateInventory: function (partNumber, quantity) {
    let parsedPN = parseInt(partNumber);
    let parsedQTY = parseInt(quantity);
    db.serialize(() => {
      db.get(
        'UPDATE parts SET quantity = ? WHERE number = ?',
        [parsedQTY, parsedPN],
        (err, rows) => {
          if (err) return console.error(err.message);
          console.log(
            'Inventory Updated | Part Number #' +
              partNumber +
              ' : In Stock - ' +
              parsedQTY
          );
        }
      );
    });
  },

}
