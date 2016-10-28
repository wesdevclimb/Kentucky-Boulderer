var express = require('express');
var app = express();
var PORT = 9000;

app.get('/', function(req, res){
  
});

app.listen(PORT, function(){
  console.log("Frontend server is running on port " + PORT);
});
