'use strict';

var express = require('express');
   var Area = require('../models/area.js');
var Boulder = require('../models/boulder.js');
var Problem = require('../models/problem.js');
var Comment = require('../models/comment.js');

var router = express.Router();

router.get('/areas', function(req, res) {
  var result = {};

  Area.find({}, function(err, areas) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({areas: areas});
    // result.areas = areas;
  });

  res.json(result);
});

module.exports = router;
