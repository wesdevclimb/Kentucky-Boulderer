'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database.js');
require('./seed.js');

app.use('/', express.static('public'));

app.listen(3000, function(){
  console.log("Frontend server is running on port 3000");
});
