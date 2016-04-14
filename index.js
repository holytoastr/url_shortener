var express   = require("express");
var hbs       = require("express-handlebars");
var mongoose  = require("mongoose");
var parser    = require("body-parser");

var app       = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutDir:      "views/",
  defaultLayout:  "layout-main"
})); // end app handlebars engine

app.get("/", function(req, res){
  res.render("TBD");

}); // end index view

app.listen(app.get("port"), function(){
  console.log("Boo!");
}); // end listen
