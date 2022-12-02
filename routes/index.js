const { Router } = require('express');
const express = require('express');
const {
  cartExists,
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  addInventory,
  removeInventory,
  updateInventory,
  search,
} = require('../database/innerdb');
const router = express.Router();
const parts = require('../database/innerdb'); // Used to call functions using the DB

const {
  getAllRows
} = require('../database/startdb');
const feeBrackets = require('../database/startdb');

// let session; // Used to hold session data
// let Cart = require('../database/cart')

// Homepage Route
router.get('/', (req, res) => {
  res.render('index');
});

// Catalog Page GET Route
router.get('/catalog', (req, res) => {
  try {
    parts.getAllItems((list) => {
      res.render('catalog', {
        all: list,
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// "Add to Cart" POST Route on the Catalog Page
router.post('/addtocart/:number', (req, res) => {
  // Check if cart exists, if it doesn't then create one
  let promise = cartExists(req.session.id).then((result) => {
    if (!result) createCart(req.session.id);
  });
  addToCart(req.session.id, req.params.number, req.body.quantity);
  res.redirect('/cart');
});

// "Remove from Cart" POST Route on the Catalog Page
router.post('/removefromcart/:number', (req, res) => {
  removeFromCart(req.session.id, req.params.number);
  res.redirect('/cart');
});

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
router.get('/cart', (req, res) => {
  try {
    getCart(req.session.id).then((result) => {
      if (!result) {
        console.log('No cart');
      } else {
        res.render('cart', { all: result });
      }
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// Associate Home Screen GET Route
router.get('/associate', (req, res) => {
  res.render('associate');
});

// Receiving (Associate) GET Route
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

router.get('/admin', (req, res) => {
  try {
    feeBrackets.getAllRows((list) => {
      console.log("LOADING BOUNDS");
      res.render('admin', { all: list});
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// Login page GET Route
router.get('/loginuser', (req, res) => {});

// Backend Data Testing Route
router.get('/test', (req, res) => {
  try {
    getCart(req.session.id).then((result) => {
      if (!result) {
        console.log('No cart');
      } else {
        res.render('test', { all: result });
      }
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
module.exports = router;
