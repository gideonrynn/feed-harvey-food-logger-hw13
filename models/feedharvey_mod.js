
// console.log(`Connected to feedharvey_mod.js`);

//Dependencies
const orm = require("../config/orm");

const food = {

  //method that will pass the food table and callback function into the orm m so that it may run the query once data return - all from db
  modselectAll: function(callbackF) {

    orm.ormselectAll("food", function(result) {

      //return data once food table passed in
      callbackF(result);

    });
    
  },

    //takes sql columns to be updated, values to match columns, passes to orm m and returns data once complete
    modinsertOne: function(columns, values, callbackF) {

      orm.orminsertOne("food", columns, values, function(result) {
            
        callbackF(result);

      });

    },

    //takes column and value object (in this app specifically devoured 1/true), id of food item to be updated, passes to orm m and returns data once complete
    modupdateOne: function(columnValue, foodID, callbackF) {

      orm.ormupdateOne("food", columnValue, foodID, function(result) {

        callbackF(result);

      });

    },

    moddeleteAll: function(columnValue, callbackF) {

      orm.ormdeleteAll("food", columnValue, function(result) {
  
        //return data once food table passed in
        callbackF(result);
  
      });
      
    },
    
}

//export so that it can be used in other files
module.exports = food;

