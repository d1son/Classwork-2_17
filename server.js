var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var mySql = require("mysql");

var swquelize = new Sequelize("classwork_2_17", "root");

var PORT = process.env.NODE_ENV || 3000;

var app = express();

var Name = sequelize.define("name", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: {
				args: [1, 20],
				msg: "Your name cannot be more than 20 characters"
			},
			is: ["^[a-z]+$", "i"]
		}
	},
	phone: {
		type: Sequelize.INTEGER,
		validate: {
			isInt: true,
		},
		allowNull: false;
	},
	message: {
		type: Sequelize.TEXT,
		validate: {
			len: [5, 500],
			allowNull: false
		}
	}
});

app.engine("handlebars", expressHandlebars({
	defaultlayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
	extended: false
}));

app.post("/message", function(req, res){
	Message.create(req.body).then(function(user) {
		res.redirect("/");
	}).catch(funtion(err) {
		res.redirect("/?msg=" + err.message);
	});
}); 

app.get("/", function(req, res) {
	Message.findAll().then(function(message) {
		res.render("index", {
			messages: messages
		});
	});
});

sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("LISTENING!!");
	});
});