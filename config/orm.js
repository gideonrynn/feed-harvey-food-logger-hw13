//**In Progress */
//define database interactions
console.log(`Connected to orm.js`);

//import my sql connection
const connection = require("../config/connection");

//create an array of question marks based on to pass into the sql query
function createQMs(num) {
    var allMarks = [];
  
    for (var i = 0; i < num; i++) {
      allMarks.push("?");
    }
  
    return allMarks.toString();
  }

//orm variable is an object that holds all the functions that iwll be used 
const orm = {

    //query database for all data from the food table
    //function will take in the specific table and callback function identified in the model(?)
    ormselectAll: function(tb, cb) {

        console.log(`ormselectall called`);

        //define select all query that will grab everything from the food table in the db
        const saQuery = "select * from " + tb + ";";

        connection.query(saQuery, function(err, resSA) {

            if (err) { throw err };
      
            //run callback that will pass in the data that comes back from the query
            cb(resSA);

        });
        
    },

    orminsertOne: function(tb, cols, vals, cb) {

        console.log(`orminsertOne called`);

        //build query
        var ioquery = "insert into " + tb;
  
        ioquery += " (";
        ioquery += cols.toString();
        ioquery += ") ";
        ioquery += "VALUES (";
        ioquery += createQMs(vals.length);
        ioquery += ") ";

        console.log(ioquery)
    
        connection.query(ioquery, vals, function(err, res) {
          if (err) { throw err; }
    
          cb(res);
        });

      },
        

    updateOne() {
        console.log(`this is the updateone method`);
    },

}

//export so it can be accessed from other files
module.exports = orm;