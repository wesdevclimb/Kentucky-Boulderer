'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = new Schema({
  name: String,
  grade: Number,
  description: String,
  FA: String,
  parentBoulder: { type: Schema.Types.ObjectId, ref: 'Boulder' },
  parentArea: { type: Schema.Types.ObjectId, ref: 'Area' },
  dateSubmitted: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

var Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;
