// include all the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose"):
var logger = require("morgan");

// require Saved Schema
var Saved = require("./Components/Childrens/Saved");
// CREATE instance of express
var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 3000;

// Run morgan for logging
app.use(logger("div"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "applocation/vnd.api+json "}));
app.use(express.static("./public"));

// MongoDB configration 																								
mongoose.connect("mongodb://mohammed/test");
var db = mongoose.connect;
db.on("error", function(err) {
	console.log("Mongoose Error: ", err);

});
// Main "/" route , this will redirect the user to our rendered React application                                                                                                                                   
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});
// send GET request to retrive most recent search data
app.get("/api", function(req, res) {
	// we will find all the records, sort it in a decending order
	Searched.find({}).sort([
		["date", "decending"]
		]).exec(function(err, doc) {
			if (err) {
				console.log(err);

			}else{
				res.send(doc);
			}
		});
	});
//Route to send POST requests to save each search.
app.post("/api", function(req, res) {
	console.log("BODY: " + req.body.news);
	// save the news based on JSON input
	Searched.create({
		news: req.body.news,
		//to get the current date
		date: Date.now()
	}, function(err) {
		if (err) {
			console.log(err);
		} else{
			res.send("Saved Search");
		}
	
	});
});
// App listen
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});














