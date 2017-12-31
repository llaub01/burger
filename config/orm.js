// requires
var connection = require ('./connection.js');

// Set keys 
function objSqlFormat(obj) {
	var tempArr = [];

	for (var key in obj) {
		tempArr.push(key + "=" + obj[key]);
	}
	return tempArr.toString();
}

// Put ? after every value
function questionMarkValue(num) {
	var tempArr = [];

	for (var i = 0; i < num; i++) {
		tempArr.push("?");
	}
	return tempArr.toString();
}

// The ORM
var orm = {
	// Everything from table
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";

		// The DB query 
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results
			cb(result);
		});
	},

	// Insert a table entry
	insert: function(table, cols, vals, cb) {
		// format values
		var theValues = questionMarkValue(vals.length);
		var theColumns = cols.toString();
		// The query string to insert
		var queryString = "INSERT INTO " + table + " (" + theColumns + ") VALUES (" + theValues + ")";
		//console.log(theValues);
		//console.log(queryString);

		// The DB query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results
			cb(result);
		}); 
	},

	// Updates a table entry
	update: function(table, objColVals, condition, cb) {
		// format values
		var objSql = objSqlFormat(objColVals)
		//console.log(objSql);

		// Query string to update
		var queryString = "UPDATE " + table + " SET " + objSql + " WHERE " + condition;

		// The DB query // The DB query

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results
			cb(result);
		});
	}
};

// Export ORM
module.exports = orm;