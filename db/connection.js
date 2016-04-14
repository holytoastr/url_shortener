var mongoose = require("mongoose");

var UrlShortenerSchema = new mongoose.Schema(
  {
    url:  String,
    short_url: String
  }
);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect("mongodb://localhost/urlshortener");
}
mongoose.model("Url", UrlShortenerSchema);


var seedData = require("./seeds.json");
module.exports = mongoose;
