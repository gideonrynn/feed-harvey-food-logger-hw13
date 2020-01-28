//**In Progress */
//Set up initial get route at index
//see documentation at http://expressjs.com/en/guide/routing.html

console.log(`Connected to feedharvey_controller.js`);

const express = require("express");
const burgerMod = require("../models/feedharvey_mod");

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

  //take the callback defined in models, and the data collected from sql, and send it to the index
  burgerMod.selectAllMod(function(data) {

    //create object that will be rendered in handlebars index with the data pulled back from the db
    const datatorender = {
      burgersObj: data
    };

    //send object to index
    res.render("index", datatorender);

  })
  
});

router.post("/api/burgers", function(req, res) {
  // need req.body with variables
});

router.delete("/api/burgers/:id", function(req, res) {
  // need req.params.id
});


module.exports = router;
