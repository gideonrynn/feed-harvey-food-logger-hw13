//**Complete */

//dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create instance of express app
const app = express();

// Set the port of our application, which can also be used by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine. "main" refers to layouts
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

//set Handlebars to handle the browser tasks, set express to make room for Handles and default to main template
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// Set access to the public directory
app.use(express.static("public"));

//Import routes and give the server access to them
const routes = require("./controllers/burgers_controller");

//use the routes exported from the controller.js
app.use(routes);

// Start server so that it is listening for client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });