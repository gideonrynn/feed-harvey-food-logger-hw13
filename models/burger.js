//**In Progress */

//this file will contain all the "instructions for what should be sent to the queries that will ultimately be rendered in the index"

console.log(`Connected to models/burger.js`);

const orm = require("../config/orm");

const burger = {

    //set function that will pass the burger table and callback function into the orm call so that it may run the query and return data from the database
    selectAllMod: function(cb) {

        orm.selectAllORM("burgers", function(res) {
            
            cb(res);

        });

    }

    // orm.selectAll()
    // orm.insertOne()
    // orm.updateOne()
    
}

module.exports = burger;

