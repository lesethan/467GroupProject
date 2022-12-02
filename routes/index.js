const express = require("express");
const { processPayment } = require("../database/credit");
const { cartExists, addToCart, createCart, getCart, removeFromCart, generateOrder, showOrder, showAllOrders, completeOrder, convertCartItemsToOrder, destroyCart, subtractItem, addInventory, removeInventory, updateInventory, getAllRows, calculateSH } = require("../database/innerdb");
const router = express.Router();
const nodemailer = require('nodemailer')
const parts = require("../database/innerdb"); // Used to call functions using the DB

// Emailer configuration
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'motormedic467@gmail.com',
    pass: 'lktrzjjtvwnxxray'
  }
})

async function emailConfirmation(email, sessionID) {
  let emailbody = `Your order ID is ${sessionID} and has been submitted`

  let mailOptions = {
    from: 'motormedic467@yahoo.com',
    to: email,
    subject: 'Motor Medic Order Confirmation',
    text: emailbody
  }

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err.message)
    console.log(`Confirmation email sent to ${mailOptions.to}`)
  })
}

async function emailShipped(email, sessionID) {
  let emailbody = `Your Order ID ${sessionID} has been shipped`

  let mailOptions = {
    from: 'motormedic467@yahoo.com',
    to: email,
    subject: 'Your Motor Medic Order has been shipped',
    text: emailbody
  }

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err.message)
    console.log(`Shipping email sent to ${mailOptions.to}`)
  })
}

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
router.get('/removefromcart/:number', (req, res) => {
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
        let weight = 0;
        result.forEach((item) => weight = (weight + item.weight) * item.quantity_selected )
        console.log(weight)
        calculateSH(weight, (sh) => {
          res.render("cart", { all: result, sh})
        })
        
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
  let id = req.session.id

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
      generateOrder(req.session.id, name, email, ccnumber, price)
      convertCartItemsToOrder(req.session.id)

      emailConfirmation(email, id).then(() => {
        destroyCart(req.session.id)
        res.redirect("/ordersubmit")
      })
    }
  })
})

// Landing Page for Order Submission
router.get("/ordersubmit", (req, res) => {
  showOrder(req.session.id).then((items) => {
    items.forEach((item) => subtractItem(item.number, item.quantity_selected))
    let weight = 0;
    items.forEach((item) => weight = (weight + item.weight) * item.quantity_selected )
    calculateSH(weight, (sh) => {
      res.render("ordersubmit", { items, sh })
    })

  })
})

// Workstation
router.get("/workstation", (req, res) => {
  parts.showAllOrders((orders) => {
    res.render("workstation", { orders })
  })
})

router.get("/vieworder/:id", (req, res) => {
  showOrder(req.params.id).then((items) => {
    let weight = 0;
    items.forEach((item) => weight = (weight + item.weight) * item.quantity_selected )
    calculateSH(weight, (sh) => {
      res.render("vieworder", { items, sh })
    })
    
  })
})

router.post("/vieworder/:id", (req, res) => {
  showOrder(req.params.id).then((items) => {
    let weight = 0;
    items.forEach((item) => weight = (weight + item.weight) * item.quantity_selected )
    calculateSH(weight, (sh) => {
      res.render("vieworder", { items, sh })
    })
    
  })
})

router.post("/completeorder/:id/:email", (req, res) => {
  completeOrder(req.params.id);
  emailShipped(req.params.email, req.params.id).then(() => {
    res.redirect("/workstation")
  })
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

// Admin page route
router.get('/admin', (req, res) => {
  try {
    getAllRows((list) => {
      console.log("LOADING BOUNDS");
      console.log("Testing SH:")
      
      calculateSH(5, (x) => { 
        console.log(x)
        res.render('admin', { all: list, x}); 
      })
      
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

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
