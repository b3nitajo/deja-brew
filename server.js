const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("config");
const cors = require('cors');
const routes = require('./routes');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const corsOptions = require('./config/cors.js');

app.use(cors(corsOptions));

// Add routes, both API and view
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });
}

//   =======================================
//  DB Config
const dbAuth = process.env.dbAuthKEY;
// Connect to MongoDB
mongoose
  .connect(dbAuth, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
   
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
//=========================================
module.exports = app;
