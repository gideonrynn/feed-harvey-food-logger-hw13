//5
// 1. Inside your `burger` directory, create a folder named `controllers`.
// 2. In `controllers`, create the `burgers_controller.js` file.
// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.

console.log(`Connected to burgers_controller.js`);

const express = require("express");
const burgerjs = require("../models/burger");

//**from documentation at http://expressjs.com/en/guide/routing.html
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function (req, res) {
  // res.send('This is the homepage')

  // res.render("index", tbd);
  res.render("index");
  
});

router.post("/api/burgers", function(req, res) {
  // need req.body with variables
});

router.delete("/api/burgers/:id", function(req, res) {
  // need req.params.id
});


module.exports = router;
