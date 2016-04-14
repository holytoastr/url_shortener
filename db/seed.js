var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Url = mongoose.model("Url");

Url.remove({}).then(function(){
  Url.collection.insert(seedData).then(function(){
    process.exit();
  });
});
