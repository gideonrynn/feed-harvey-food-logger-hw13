//**In Progress */
//Set up initial get route at index
//see documentation at http://expressjs.com/en/guide/routing.html

console.log(`Connected to feedharvey_controller.js`);

const express = require("express");
const foodMod = require("../models/feedharvey_mod");

const router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// });

// define the home page route
router.get('/', function (req, res) {

  // res.send('This is the homepage')
  // res.render("index", tbd);

  //take the callback defined in model, and the data collected from sql, and send it to the index
  foodMod.modselectAll(function(data) {

    //create object that will be rendered in handlebars index with the data pulled back from the db
    const datatorender = {
      foodObj: data
    };

    //send object to index
    res.render("index", datatorender);

  })
  
});

router.get("/api/food", function (req, res) {

  //take the callback defined in model, and the data collected from sql, and send it to the index
  foodMod.modselectAll(function(data) {

    //send data to browser
    res.send(data);

  })
  
});


router.post("/api/food", function(req, res) {

  // need req.body with variables
  // console.log(req.body);
  // console.log(req.body.food);
  // console.log(req.body.devoured);

    foodMod.modinsertOne(
      ["food_name", "devoured"], 
      [ req.body.food, req.body.devoured ], 
      function(result) {
        console.log(result);

      // Send back the ID of the new food that input
      //id is what we created as a placeholder placed in the index**************
      res.json({ id: result.insertId });
    });
  
});

router.delete("/api/food/:id", function(req, res) {
  // need req.params.id
});


module.exports = router;
