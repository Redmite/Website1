var mysql = require('mysql'); //import the mysql module so we can connect to the database

var connection = mysql.createConnection({ //varible containing credentials for the database
  host: "localhost",
  user: "root",
  password: "722715"
}); 

connection.connect(function(err) { //connect to the database
  if (err) throw err;
  console.log("Connected!");
});

function dbNewAccount(EMAIL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME) { //function to add a new account to the database
  var sql = "USE userinfo"; //select the database to use. The database is called userinfo and the sql varible is the sql command we pass to the database
  connection.query(sql, function (err, result) { //pass the sql command to the database
    if (err) throw err; //if there is an error, throw it
    console.log("db userinfo selected"); //if there is no error, print this to the console
  });
  var sql = `INSERT INTO creds (EMAIL, USERNAME, PASSWORD, LASTNAME, FIRSTNAME) VALUES (${mysql.escape(EMAIL)}, ${mysql.escape(USERNAME)}, ${mysql.escape(PASSWORD)}, ${mysql.escape(LASTNAME)}, ${mysql.escape(FIRSTNAME)})`; //this takes the actual data we want to insert into the database and puts it into the sql command
  connection.query(sql, function (err, result) { //pass the sql command to the database
    if (err) throw err; //if there is an error, throw it
    console.log("1 record inserted"); //if there is no error, print this to the console
})};

function login(EMAIL, PASSWORD) {
  var sql = "USE userinfo"; //select the database to use. The database is called userinfo and the sql varible is the sql command we pass to the database
  connection.query(sql, function (err, result) { //pass the sql command to the database
    if (err) throw err; //if there is an error, throw it
    console.log("db userinfo selected"); //if there is no error, print this to the console
  });
  var sql = `SELECT * FROM creds WHERE EMAIL = ${mysql.escape(EMAIL)} AND PASSWORD = ${mysql.escape(PASSWORD)}`;
  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  })};

module.exports = {dbNewAccount, login}; //export the functions so we can use it in other files