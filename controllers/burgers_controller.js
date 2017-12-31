// requires
var express = require("express");
var burger = require("../models/burger.js");

// Express router
var router = express.Router();

// The routes
router.get("/", function(req, res) {
	burger.selectAllBurgers(function(data) {
		var hbarsObject = {
			burgers: data
		};

		res.render("index", hbarsObject);
	});
});

router.post("/burgers", function(req, res) {
	burger.insertBurger(["burger_name"], [req.body.burger_name], function(data) {
		res.redirect("/");
	});
});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.updateBurger({devoured: true}, condition, function(data) {
		res.redirect("/");
	});
});

// Export routes
module.exports = router;