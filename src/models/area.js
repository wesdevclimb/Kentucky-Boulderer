'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AreaSchema = new Schema({
  name: String,
  description: String,
  boulders: [BoulderSchema]
});

var BoulderSchema = new Schema({
  name: String,
  description: String,
  problems: [ProblemSchema]
});

var ProblemSchema = new Schema({
  name: String,
  grade: String,
  description: String,
  firstAscent: {
    ascentionist: String,
    dateSent: Date,
  },
  boulder: String,
  area: String,
  dateSubmitted: { type: Date, default: Date.now },
  meta : {
    likes: Number,
    stars: Number,
    gradeVotes: String
  },
  comments: [CommentSchema]
});

var CommentSchema = new Schema({
  author: ObjectId,
  body: String,
  date: Date
});

var Area = mongoose.model('Area', AreaSchema);

module.exports = Area;
