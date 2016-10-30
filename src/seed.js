'use strict';

var Problem = require('./models/problem.js');
var Boulder = require('./models/boulder.js');
var Area = require('./models/area.js');

var areas = [
  "The Cove",
  "Area 571"
];

areas.forEach(function(area, index) {
  Area.find({'name': area}, function(err, areas) {
    if (!err && !areas.length) {
      Area.create({description: "", name: area});
    }
  });
});
