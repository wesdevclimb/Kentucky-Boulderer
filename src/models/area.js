'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AreaSchema = new Schema({
  name: String,
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  boulders: [{ type: Schema.Types.ObjectId, ref: 'Boulder' }]
});

var Area = mongoose.model('Area', AreaSchema);

module.exports = Area;
