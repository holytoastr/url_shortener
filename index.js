var express   = require("express");
var hbs       = require("express-handlebars");
var mongoose  = require("mongoose");
var parser    = require("body-parser");

var app       = express();
var Crypt     = mongoose.model(TBD);

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
  res.render("TBD");

}); // end default view

app.get("/cryptly", function(req, res){
  res.render("cryptly-index");
}); // end index view

app.get("/cryptly/:name", function(req, res){
  Crypt.findOne({name: req.params.name}).then(function(TBD){
    res.render("cryptly-show", {
      TBD: TBD
    });
  });
}); // end generated crypt view

app.post("/cryptly", function(req, res){
  short_url = TBD;
  TBD.create(req.body.long_url).then(function(long_url, short_url){
    res.redirect("/cryptly/:name");
  });
}); // end post request to crypt

app.listen(app.get("port"), function(){
  console.log("Boo!");
}); // end listen
