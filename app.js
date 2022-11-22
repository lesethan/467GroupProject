const express = require("express");
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const path = require("path");
const dotenv = require("dotenv");

// Load config file
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 3000;

// Initialize express app
const app = express();

// Express session middleware
const dayInMilliseconds = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "maybethisshouldgoinconfig",
  saveUninitialized: true,
  cookie: { maxAge: dayInMilliseconds },
  resave: false
}))

// HTTP form parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Cookie parser middleware
app.use(cookieParser());

// Set static folder (for css)
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to ejs for send data to the front end
app.set("view engine", "ejs");

app.use("/", require("./routes/index"));

// Start the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
