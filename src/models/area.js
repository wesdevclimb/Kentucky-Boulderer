'use strict';

var mongoose = require('mongoose');

var AreaSchema = new mongoose.Schema({
  name: String,
  description: String,
  boulders: []
});

var Area = mongoose.model('Area', AreaSchema);

module.exports = Area;
