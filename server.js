//dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");


// Create instance of express app
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine. "main" refers to layouts
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

//as long as Handlebars is here, it will handle all browser tasks
app.set("view engine", "handlebars");



// Start server so that it is listening for client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });