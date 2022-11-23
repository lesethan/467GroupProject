const express = require('express');
const {
  cartExists,
  addToCart,
  createCart,
  getCart,
  removeFromCart,
} = require('../database/innerdb');
const router = express.Router();
const parts = require('../database/innerdb'); // Used to call functions using the DB

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

router.get('/associate', (req, res) => {
  res.render('associate');
});

router.get('/receiving', (req, res) => {
  res.render('receiving');
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
