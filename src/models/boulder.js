'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoulderSchema = new Schema({
  name: String,
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  parentArea: { type: Schema.Types.ObjectId, ref: 'Area' },
  problems: [{ type: Schema.Types.ObjectId, ref: 'Problem' }]
});

var Boulder = mongoose.model('Boulder', BoulderSchema);

module.exports = Boulder;
