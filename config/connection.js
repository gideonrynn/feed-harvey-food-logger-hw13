
//dependencies
const mysql = require('mysql');
const pw = require('./p');

// create the connection for mysql db
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
  
    // Your password
    password: pw,
  
    //Schema and seed in the db folder
    database: "feedharvey_db"
});

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