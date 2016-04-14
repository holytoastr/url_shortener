var express   = require("express");
var hbs       = require("express-handlebars");
var mongoose  = require("./db/connection");
var db = require("./db/connection");
var parser    = require("body-parser");

var app       = express();
var Crypt     = mongoose.model("Url");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutDir:      "views/",
  defaultLayout:  "layout-main"
})); // end app handlebars engine

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("index");

}); // end default view

app.get("/index", function(req, res){
  res.render("index", {
  });

}); // end index view

app.get("/:short_url", function(req, res){
  Crypt.findOne({short_url: req.params.short_url}).then(function(urlshortener){
    res.redirect(urlshortener.url);
  });
}); // end generated crypt view

app.post("/index", function(req, res){
  Crypt.create(req.body.url).then(function(url){
    res.redirect("/");
  });
}); // end post request to crypt

app.listen(app.get("port"), function(){
  console.log("Boo!");
}); // end listen
