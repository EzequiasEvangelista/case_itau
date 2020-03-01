const express = require('express');
const app = express();

// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "127.0.0.1", // ip address of server running mysql
  user: "root", // user name to your mysql database
  password: "mudar123", // corresponding password
  database: "twitter" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  con.query("SELECT * FROM posts ORDER BY seguidores DESC", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
    
    app.get('/', function (req, res) {
      return res.send(result);
     });
     

  });
  app.listen(process.env.PORT || 8080);

});