'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kentucky-boulderer', function(err) {
  if(err) {
    console.log('Failed to connect to Mongodb');
  } else {
    console.log('Successfully connected to Mongodb');
  }
});
