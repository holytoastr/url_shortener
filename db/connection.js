var mongoose = require("mongoose")

var urlShortenerSchema = new mongoose.Schema(
  {
    url:  String
    key: {$regex: /^[a-zA-Z0-9]{2,4}$/} String
  }
);

mongoose.model("Url", urlShortenerSchema);
mongoose.connect("mongodb://localhost/urlshortener");

var seedData = require("./seeds.json");
module.exports = {
  candidates: seedData
}
