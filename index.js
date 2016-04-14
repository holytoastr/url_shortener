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
  res.render("index");
}); // end index view

app.get("/index/:name", function(req, res){
  Crypt.findOne({name: req.params.name}).then(function(urlshortener){
    res.render("index", {
      urlshortener: urlshortener
    });
  });
}); // end generated crypt view

app.post("/index", function(req, res){
  function makeKey(){
    var key = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < 4; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return key;
    }
  }
  Crypt.create(req.body.long_url).then(function(url, key){
    res.redirect("/index/:name");
  });
}); // end post request to crypt

app.listen(app.get("port"), function(){
  console.log("Boo!");
}); // end listen
