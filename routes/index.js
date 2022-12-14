const express = require("express");
const { processPayment } = require("../database/credit");
const { cartExists, addToCart, createCart, getCart, removeFromCart, generateOrder, showOrder, showAllOrders, completeOrder } = require("../database/innerdb");
const router = express.Router();
const parts = require("../database/innerdb"); // Used to call functions using the DB

// let session; // Used to hold session data
// let Cart = require('../database/cart')

// Homepage Route
router.get("/", (req, res) => {
  res.render("index");
});


// Catalog Page GET Route
router.get("/catalog", (req, res) => {
  try {
    parts.getAllItems((list) => {
      res.render("catalog", { 
        all: list });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// "Add to Cart" POST Route on the Catalog Page
router.post('/addtocart/:number', (req, res) => {
  // Check if cart exists, if it doesn't then create one
  let promise = cartExists(req.session.id)
                .then((result) => {
                  if (!result) createCart(req.session.id)
                });
  addToCart(req.session.id, req.params.number, req.body.quantity);
  res.redirect("/cart");
}) 

// "Remove from Cart" POST Route on the Catalog Page
router.post('/removefromcart/:number', (req, res) => {
  removeFromCart(req.session.id, req.params.number)
  res.redirect("/cart");
})

// Inventory Management POST Routes
router.post('/addInventory/:number', (req, res) => {
  addInventory(req.params.number, req.body.quantity, req.body.partQuantity);
  res.redirect('/receiving');
});

router.post('/removeInventory/:number', (req, res) => {
  removeInventory(req.params.number, req.body.quantity, req.body.partQuantity);
  res.redirect('/receiving');
});

router.post('/updateInventory/:number', (req, res) => {
  updateInventory(req.params.number, req.body.quantity);
  res.redirect('/receiving');
});

// Cart page GET Route
router.get("/cart", (req, res) => {
  try {
    getCart(req.session.id).then((result) => {
      if (!result) {
        console.log("No cart");
      } else {
        res.render("cart", { all: result})
      }
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// Checkout page 
router.post("/checkout/:price", (req, res) => {
  let name = req.body.firstname;
  let email = req.body.email
  let address = req.body.address
  let ccnumber = req.body.cardnumber 
  let ccexp = req.body.expdate;
  let price = req.params.price
  let authNum;

  if(!name || !email || !address || !ccnumber || !ccexp) {
    res.redirect("/cart")
  }

  processPayment(name, email, address, ccnumber, ccexp, price).then((result) => {
    authNum = result.authorization
    console.log(result)
    if (authNum == null) {
      console.log("Error processing payment")
      res.redirect("/cart")
    } else {
      generateOrder(req.session.id, name, email, ccnumber, price);
      res.redirect("/ordersubmit")
    }
  })
})

// Doesn't work properly yet
router.get("/ordersubmit", (req, res) => {
  showOrder(req.session.id).then((order) => {
    console.log(order)
    getCart(order.session_id).then((cart) => {
      console.log(cart)
      res.render("ordersubmit", { order, cart })
    })
    
  })
})

router.get("/workstation", (req, res) => {
  parts.showAllOrders((orders) => {
    res.render("workstation", { orders })
  })
})

router.post("/completeorder/:id", (req, res) => {
  completeOrder(req.params.id);
  res.redirect("/workstation")
})

// Asocciate Home Screen GET Route
router.get('/associate', (req, res) => {
  res.render('associate');
});

// Receiving (Employee) GET Route
router.get('/receiving', (req, res) => {
  try {
    parts.getAllItems((list) => {
      res.render('receiving', { all: list });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// // Login page GET Route
// router.get("/loginuser", (req, res) => {
  
// })

// Backend Data Testing Route
router.get("/test", (req, res) => {
  try {
    getCart(req.session.id).then((result) => {
      if (!result) {
        console.log("No cart");
      } else {
        res.render("test", { all: result})
      }
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
module.exports = router;
