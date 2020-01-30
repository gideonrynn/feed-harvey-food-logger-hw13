//**In Progress */

//this file will contain all the "instructions" for what should be sent to the sql queries in orm that will ultimately be rendered in the index

console.log(`Connected to feedharvey_mod.js`);

const orm = require("../config/orm");

const food = {

    //set function that will pass the food table and callback function into the orm call so that it may run the query and return data from the database
    modselectAll: function(cb) {

        orm.ormselectAll("food", function(res) {
            
            cb(res);

        });
    },

    modinsertOne: function(cols, vals, cb) {

        orm.orminsertOne("food", cols, vals, function(res) {
            
          cb(res);

        });

      }

    // orm.selectAll()
    // orm.insertOne()
    // orm.updateOne()
    
}

module.exports = food;

