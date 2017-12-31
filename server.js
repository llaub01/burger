// requires
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

// express stuff
var PORT = process.env.PORT || 3000;
var app = express();

// Serving
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/", routes);

// Handlebars stuff
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(process.cwd() + '/public'));

// start up the server
app.listen(PORT, function() {
	console.log("Burger App listening on PORT " + PORT);
});