//**In Progress */
console.log(`Connected to orm.js`);

//import my sql connection
const connection = require("../config/connection");

//think about the helper functions, defined in the last exercise

//orm variable is an object that holds all the functions that iwll be used 
const orm = {

    //query database for all data from the BURGER table
    //function will take in the specific table and callback function identified in the model(?)
    selectAllORM: function(tb, cb) {

        console.log(`SelectAll method called`);

        //define select all query that will grab everything from the BURGERS table in the db
        const saQuery = "select * from " + tb + ";";

        connection.query(saQuery, function(err, res) {

            if (err) { throw err };
      
            //run callback that will pass in the data that comes back from the query
            cb(res);

        });
        
    },

    insertOne() {
        console.log(`this is the insert one method`);
    },

    updateOne() {
        console.log(`this is the updateone method`);
    },

}

//export so it can be accessed from other files
module.exports = orm;