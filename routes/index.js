const express = require("express");
const router = express.Router();
const parts = require("../database/innerdb"); // 

// Homepage Route
router.get("/", (req, res) => {
  res.render("index");
});


// Backend Data Testing Route
router.get("/test", (req, res) => {
  try {
    parts.getAllItems((list) => {
      res.render("test", { 
        all: list });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

module.exports = router;
