// requires ORM
var orm = require("../config/orm.js");

// burger object - selectAllBurgers, insertBurger, updateBurger
var burger = {
	selectAllBurgers: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertBurger: function(cols, vals, cb) {
  		orm.insert("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	updateBurger: function(colVals, eat, cb) {
		orm.update("burgers", colVals, eat, function(res) {
			cb(res);
		});
	}
}; 

// Export burger object
module.exports = burger;