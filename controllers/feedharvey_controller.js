
//see documentation at http://expressjs.com/en/guide/routing.html

// console.log(`Connected to feedharvey_controller.js`);

// Dependencies
const express = require("express");
const foodMod = require("../models/feedharvey_mod");

//create route handler
const router = express.Router()


router.get('/', function (req, res) {

  //take data collected from sql, and send it to the index
  foodMod.modselectAll(function(data) {

    let devoured = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].devoured === 1) {
        devoured.push(data[i].devoured);
      }
    }

    let valSize = (devoured.length * 11) + 92 + 'px';
    

    //create object that will be rendered in handlebars index with the data pulled back from the db
    let datatorender = {
      foodObj: data,
      imgSize: valSize
    };

    //send object to index
    res.render("index", datatorender);

  })
  
});

//will display json format all food data
router.get("/api/food", function (req, res) {

  //take the callback defined in model, and the data collected from sql, and send it to browser at api/food
  foodMod.modselectAll(function(data) {

    res.send(data);

  })
  
});

//post route for cre/saving new food entry
router.post("/api/food", function(req, res) {

  // need req.body with variables - fixed undefined req.body with body parser
  // console.log(req.body);
  // console.log(req.body.food);
  // console.log(req.body.devoured);

    foodMod.modinsertOne(

      //pass in table column names 
      ["food_name", "devoured"], 

      // and the values from the data sent (req)
      [ req.body.food, req.body.devoured ], 

      function(result) {

      //send new id with new note
      res.json({ id: result.newID });
    });
  
});

//route for updating food entry by id passed in
router.put("/api/food/:id", function(req, res) {

  // set variable that includes parameter from the request
  let foodID = "id = " + req.params.id;


  //can access the req body here =1/true
  foodMod.modupdateOne(
    { devoured: req.body.devoured }, 
    foodID, 
    
    function(result) {
    
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();

    } else {

      res.status(200).end();
    }
    
  });

});


module.exports = router;
