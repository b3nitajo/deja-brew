const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
 app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));

Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

//=========================================
// DB Config
const dbAuth = config.get('mongoURI');
// Connect to MongoDB
mongoose
  .connect(dbAuth, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
//=========================================
module.exports = app;
