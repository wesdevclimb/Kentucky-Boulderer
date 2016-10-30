'use strict';

var mongoose = require('mongoose');

var ProblemSchema = new mongoose.Schema({
  name: String,
  grade: String,
  description: String,
  firstAscent: {
    ascentionist: String,
    dateSent: { type: Date }
  },
  dateSubmitted: { type: Date, default: Date.now },
  meta : {
    likes: Number,
    stars: Number,
    gradeVotes: String
  },
  comments: [{username: String, body: String, date: Date}]
});
