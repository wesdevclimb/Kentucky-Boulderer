'use strict';

var express = require('express');
var Area = require('../models/area.js');
var Boulder = require('../models/boulder.js');
var Problem = require('../models/problem.js');
var Comment = require('../models/comment.js');

var router = express.Router();

// This query will gather all elements in the db with only their id, name, grade, and parent id fields selected and place each collection inside of an array that is a property of an object
// EXAMPLE
// var response.data = {
//  areas = [{name: "area1", description: "lorem ipsum blah blah blah", boulders: []}],
//  boulders = [{name: boulder1, more keys}, {name: "boulder2", more keys...}],
//  problems = [{name: "problem1"}, {name: problem2}]
// }

// The array of documents will be sent to the dataservice to be assembled into a valid json array so that each item can be iteratted over and sorted by ID

// var result should look something like this...

// var result = [
//   {
//     name: "area1",
//     description: "lorem ipsum blah blah blah",
//     boulders: [
//       {
//         name: "boulder1",
//         description: "lorem ipsum blah blah blah",
//         problems: [
//           {
//             name: "problem1",
//             description: "lorem ipsum blah blah blah",
//             grade: 1
//           },
//           {
//             name: "problem2",
//             description: "lorem ipsum blah blah blah",
//             grade: 2
//           }
//         ]
//       },
//       {
//         name: "boulder2",
//         description: "lorem ipsum blah blah blah",
//         problems: [
//           {
//             name: "problem3",
//             description: "lorem ipsum blah blah blah",
//             grade: 3
//           }
//         ]
//       }
//     ]
//   }
// ];

// The code for the traversing the object would look something like this...
// result.forEach(function(area, index){
//   console.log(area.name + " has " + area.boulders.length + " boulders.");
//   should print to console "area1 has 2 boulders."
// });

//------------- RETRIEVES OBJECTS FROM THE TOP OF HIERARCHY TO BOTTOM
router.get('/areas', function(req, res) {
  var raw = {};
  Area.find({}, function(err, areas) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    raw.areas = areas;
  });
  Boulder.find({}, function(err, boulders) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    raw.boulders = boulders;
  });
  Problem.find({}, function(err, problems) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    raw.problems = problems;
    res.send(raw);
  });
});

//-------- SET UP DIFFERENT POST ROUTES FOR EACH KIND OF OBJECT
router.post('/areas/submitarea', function(req, res) {
  var area = req.body;
  Area.create(area, function(err, area) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'area': area, message: 'Area Created'});
  });
});

router.post('/areas/submitboulder', function(req, res) {
  var boulder = req.body;
  Boulder.create(boulder, function(err, boulder) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'boulder': boulder, message: 'Boulder Created'});
  });
});

router.post('/areas/submitproblem', function(req, res) {
  var problem = req.body;
  Problem.create(problem, function(err, problem) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'problem': problem, message: 'Problem Created'});
  });
});

module.exports = router;
