const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Load config file
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 3000;

// Connect to legacy database

const app = express();
// Set static folder (for css)
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to ejs for templates
app.set("view engine", "ejs");

app.use("/", require("./routes/index"));

// Start the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
