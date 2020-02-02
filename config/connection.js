
//dependencies
const mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
  
    // Your password
    password: "",
  
    //Schema and seed in the db folder
    database: "feedharvey_db"
  })
};

// connect to server and db, and console.log once connected
connection.connect(function(err) {

    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log("connected as id " + connection.threadId);
  
});

//exports so other files can use this connection information to reach the database
module.exports = connection;