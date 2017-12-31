// requires
var mysql = require("mysql");

// global vars
var connection;

// Heroku DB - JAWS
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
// local DB
else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	})
};

// MySQL connection
connection.connect(function(err) {
  if (err) {
    console.error("MySQL connection error: " + err.stack + "\n");
    return;
  }
  console.log("Connected to MYSQL database: id " + connection.threadId + "\n");
});

// Export MySQL connection
module.exports = connection;