document.getElementById("submitbutton").addEventListener("click", function(){
  var short_url = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0; i < 4; i++){
    short_url += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.getElementById("hiddenFieldName").value = short_url;
});
