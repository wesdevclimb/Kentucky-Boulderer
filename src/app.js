var pug = require("pug");
var express = require('express');
var app = express();
var PORT = 9000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(PORT, function(){
  console.log("Frontend server is running on port " + PORT);
});
