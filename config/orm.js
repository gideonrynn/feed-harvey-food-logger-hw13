//define database interactions using methods
// console.log(`Connected to orm.js`);


const connection = require("../config/connection");

//create an array of question marks = to the number of values  into the sql query
function createQMs(valueLength) {

    let allMarks = [];
  
    for (let i = 0; i < valueLength; i++) {
      allMarks.push("?");
    }

    return allMarks.toString();
}

//from cat.app
// Helper function to convert object key/value pairs to SQL syntax
//in this case, the object containing devouredTrue
function objToSql(columnValue) {

  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in columnValue) {

    let value = columnValue[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(columnValue, key)) {

      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      //push to array (devoured=1)
      arr.push(key + "=" + value);
    }

  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//orm holds all the methods that will be used 
const orm = {

    //query database for all data from the food table
    //cbf - return data once query complete
    ormselectAll: function(table, callbackF) {

        // console.log(`ormselectall called`);

        // select all query that will grab everything from the food table in the db
        const saQuery = "select * from " + table + ";";

        //connect to database and run query
        connection.query(saQuery, function(err, resSA) {

            if (err) { throw err };
      
            // callback that will return data from query once query is complete
            callbackF(resSA);

        });
        
    },

    //query database and insert values from user input
    orminsertOne: function(table, columns, values, callbackF) {

        // console.log(`orminsertOne called`);

        //build query that will insert value(s) entered by user into the food table
        //createQMs allows query to be flexible to the number of values being passed through - in our present case 2, user input and default 0 for not-devoured
        var ioquery = "insert into " + table + " (" + columns.toString() + ") " + "values (" + createQMs(values.length) + ") ";

        // console.log(values);
        // console.log(values.length);

        //connect to database and run query
        //value = user input and 0 for devoured false
        connection.query(ioquery, values, function(err, resIO) {
          if (err) { throw err; }
          
          //will return data from query once query is complete
          callbackF(resIO);

        });

      },

    // query database and update specific id record  devoured to true 
    ormupdateOne: function(table, columnValue, foodID, callbackF) {
      
      //build query
      let uoquery = "update " + table + " set " +  objToSql(columnValue) + " where " + foodID;
     
        // console.log(foodID);
    
        //connect to database and return data once query complete
        connection.query(uoquery, function(err, result) {
          if (err) { throw err; }
    
          callbackF(result);

        });

    }

}

//export so it can be accessed from other files
module.exports = orm;