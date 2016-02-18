var Sequelize = require("sequelize");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
var prompt = require("prompt");
var PORT = process.env.NODE_ENV || 3000;
var app = express();

var sequelize = new Sequelize("login_db", "root");

app.engine("handlebars", expressHandlebars({
	defaultlayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
	extended: false
}));

var User = sequelize.deinfe("User", {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});


