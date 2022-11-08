const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
