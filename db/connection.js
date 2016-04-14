var mongoose = require("mongoose");

var UrlShortenerSchema = new mongoose.Schema(
  {
    url:  String,
    short_url: String
  }
);

mongoose.model("Url", UrlShortenerSchema);
mongoose.connect("mongodb://localhost/urlshortener");

var seedData = require("./seeds.json");
module.exports = mongoose;
