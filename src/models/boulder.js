'use strict';

var mongoose = require('mongoose');

var BoulderSchema = new mongoose.Schema({
  name: String,
  description: String,
  problems: []
});

var Boulder = mongoose.model('Boulder', BoulderSchema);

module.exports = Boulder;
