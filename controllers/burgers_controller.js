//5
// 1. Inside your `burger` directory, create a folder named `controllers`.
// 2. In `controllers`, create the `burgers_controller.js` file.
// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require("express");
const burgerjs = require("../models/burger");

//**from documentation at http://expressjs.com/en/guide/routing.html
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

//**end example from documentation */

module.exports = router;
